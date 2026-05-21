import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: "local-api-handler",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === "/api/request-booking" && req.method === "POST") {
              try {
                const module = await server.ssrLoadModule("./api/request-booking.ts");
                const handler = module.default;
                
                // Emulate Vercel's Node helper methods
                const enhancedRes = Object.create(res);
                enhancedRes.status = (code: number) => {
                  res.statusCode = code;
                  return enhancedRes;
                };
                enhancedRes.json = (payload: any) => {
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(payload));
                  return enhancedRes;
                };
                enhancedRes.setHeader = (name: string, value: string) => {
                  res.setHeader(name, value);
                  return enhancedRes;
                };
                enhancedRes.end = (chunk?: any) => {
                  res.end(chunk);
                  return enhancedRes;
                };

                await handler(req, enhancedRes);
                return;
              } catch (err: any) {
                console.error("Local API Handler Error:", err);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ success: false, error: err.message }));
                return;
              }
            }
            next();
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
