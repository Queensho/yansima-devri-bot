const TelegramBot = require('node-telegram-bot-api');

// Senin sağladığın Token
const token = '8441861099:AAGPaGA8ydqDHhl9drMriltJPl42krMZr8I';
const bot = new TelegramBot(token, {polling: true});

console.log(">>> Yansıma Devri Sistemi Aktif! Botun mesajlarını bekliyor...");

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Operatör, sisteme hoş geldin! 🕶️\nHaritayı taramak için /konum yazabilirsin.");
});

bot.onText(/\/konum/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      keyboard: [[{ text: "📍 Konum Gönder", request_location: true }]],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  };
  bot.sendMessage(chatId, "Bölge taraması için konum izni gerekiyor:", opts);
});