const TelegramBot = require('node-telegram-bot-api');

const token = '8441861099:AAGPaGA8ydqDHhl9drMriltJPl42krMZr8I';
const bot = new TelegramBot(token, {polling: true});
const GAME_URL = 'https://queensho.github.io/yansima-devri-bot/';

console.log(">>> SİSTEM AKTİF: OYUN MODU BAŞLATILDI <<<");

bot.onText(/\/start/, (msg) => {
    bot.setChatMenuButton({
        chat_id: msg.chat.id,
        menu_button: {
            type: 'web_app',
            text: 'OYUNA GİR 🕶️',
            web_app: { url: GAME_URL }
        }
    });

    bot.sendMessage(msg.chat.id, "🛰️ **YANSIMA DEVRİ SİSTEMİ**\n\nTam ekran operasyon haritasına erişmek için aşağıdaki butona tıkla.", {
        reply_markup: {
            inline_keyboard: [[{ text: "⚡ OPERASYONU BAŞLAT", web_app: { url: GAME_URL } }]]
        },
        parse_mode: "Markdown"
    });
});