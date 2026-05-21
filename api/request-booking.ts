import type { IncomingMessage, ServerResponse } from "http";

// Helper function to read raw request body stream if not pre-parsed
async function getRawBody(req: any): Promise<string> {
  if (req.body && typeof req.body === "object") {
    return JSON.stringify(req.body);
  }
  if (typeof req.body === "string") {
    return req.body;
  }
  
  const chunks: any[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

export default async function handler(req: any, res: any) {
  // CORS configuration for serverless functions
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      error: `Method ${req.method} Not Allowed. Only POST is supported.`
    });
    return;
  }

  try {
    let body: any = {};
    const rawBody = await getRawBody(req);
    
    if (rawBody) {
      try {
        body = JSON.parse(rawBody);
      } catch (e) {
        body = req.body || {};
      }
    } else {
      body = req.body || {};
    }

    const { name, destination, guests, dates, budget, contact, lang } = body;

    // Check validation
    if (!name || !contact) {
      return res.status(400).json({
        success: false,
        error: lang === "RU" ? "Имя и способ связи обязательны" : "Name and contact method are required"
      });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Standard markdown/html template for the Telegram message
    const messageText = `🔔 <b>Новая заявка на Easy Book!</b>

👤 <b>Имя:</b> ${name}
📍 <b>Направление/Отель:</b> ${destination || "Не указано / Not specified"}
📅 <b>Даты поездки:</b> ${dates || "Не указано / Not specified"}
👥 <b>Гости:</b> ${guests || "Не указано / Not specified"}
💰 <b>Бюджет:</b> ${budget || "Не указано / Not specified"}
💬 <b>Связь:</b> ${contact}

🌐 <b>Язык клиента:</b> ${lang || "RU"}`;

    if (!botToken || !chatId) {
      console.warn("⚠️ TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing in environment variables!");
      return res.status(200).json({
        success: true,
        demo: true,
        message: lang === "RU" 
          ? "Заявка успешно принята (демо-режим, токены Telegram не настроены)" 
          : "Request received successfully (demo mode, Telegram tokens are not configured)"
      });
    }

    // Call Telegram Bot API
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "HTML"
      })
    });

    const responseData = await telegramRes.json() as any;

    if (!telegramRes.ok || !responseData.ok) {
      console.error("❌ Telegram API error:", responseData);
      return res.status(502).json({
        success: false,
        error: responseData.description || "Failed to send message to Telegram"
      });
    }

    return res.status(200).json({ success: true });

  } catch (error: any) {
    console.error("❌ Error handling request-booking serverless function:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error"
    });
  }
}
