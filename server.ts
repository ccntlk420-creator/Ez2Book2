import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Route to submit booking request
  app.post("/api/request-booking", async (req, res) => {
    try {
      const { name, destination, guests, dates, budget, contact, lang } = req.body;

      // Basic validation
      if (!name || !contact) {
        return res.status(400).json({ 
          success: false, 
          error: lang === "RU" ? "Имя и способ связи обязательны" : "Name and contact method are required" 
        });
      }

      // Check for Telegram Bot keys
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;

      // Create a nice looking message for Telegram
      const messageText = 
`🔔 <b>Новая заявка на Easy Book!</b>

👤 <b>Имя:</b> ${name}
📍 <b>Направление/Отель:</b> ${destination || "Не указано / Not specified"}
📅 <b>Даты поездки:</b> ${dates || "Не указано / Not specified"}
👥 <b>Гости:</b> ${guests || "Не указано / Not specified"}
💰 <b>Бюджет:</b> ${budget || "Не указано / Not specified"}
💬 <b>Связь:</b> ${contact}

🌐 <b>Язык клиента:</b> ${lang || "RU"}`;

      console.log("\n=============================================");
      console.log("📥 RECEIVED BOOKING REQUEST:");
      console.log(`- Name: ${name}`);
      console.log(`- Contact: ${contact}`);
      console.log(`- Dest: ${destination}`);
      console.log(`- Dates: ${dates}`);
      console.log(`- Guests: ${guests}`);
      console.log(`- Budget: ${budget}`);
      console.log(`- Lang: ${lang}`);
      console.log("=============================================\n");

      if (!botToken || !chatId) {
        console.warn("⚠️ TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing in environment variables!");
        console.warn("Raw message that would have been sent:");
        console.log(messageText);
        console.warn("=============================================\n");
        
        // Return success but log warning in server console.
        return res.status(200).json({ 
          success: true, 
          demo: true,
          message: lang === "RU" 
            ? "Заявка успешно принята (демо-режим, токены Telegram не настроены)" 
            : "Request received successfully (demo mode, Telegram tokens are not configured)" 
        });
      }

      // Send requests to Telegram Bot API
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: "HTML"
        })
      });

      const responseData = await response.json() as any;

      if (!response.ok || !responseData.ok) {
        console.error("❌ Telegram API error:", responseData);
        throw new Error(responseData.description || "Failed to send message to Telegram");
      }

      console.log("✅ Message sent successfully to Telegram!");
      return res.status(200).json({ success: true });

    } catch (error: any) {
      console.error("❌ Error handling request-booking:", error);
      return res.status(500).json({ 
        success: false, 
        error: error.message || "Internal server error" 
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 [Easy Book] Server started at http://localhost:${PORT}`);
    console.log(`Development environment: ${process.env.NODE_ENV !== "production" ? "ACTIVE" : "INACTIVE"}`);
  });
}

startServer();
