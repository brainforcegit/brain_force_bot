const BrainForceBotApi = require("node-telegram-bot-api");

const token = "6576869497:AAHr9ErVrE0AMgwxtN_aXGDBeN88Ycj0TUM";

const bot = new BrainForceBotApi(token, { polling: true });

bot.on("message", msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    switch (text) {
        case "/start":
            bot.sendMessage(chatId, "BrainForceBot Started")

            break;
            default:
            bot.sendMessage(chatId, "uspakoysya")

            
           
    }
})

