const PORT = process.env.PORT || 3000;
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5690526740:AAEaaw_k9hqejLIAzDq9LTDahSWeLL2Aui0');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.on('text', (ctx) => {
     //const allInfo = Object.keys(ctx.messagee);
    const text = ctx.message.text;
    const name = ctx.message.from.first_name;
    const chatId = ctx.message.chat.id;

    //return ctx.reply(`Ваше сообщение: ${text} \nВаше имя: ${name}`);
    if ( chatId === 414775835 ) {
        const replyChatId = ctx.message.reply_to_message.chat.id;
        const replyMessage = ctx.message;
        const replyChat = ctx.message.reply_to_message;
        console.log(replyMessage);
        console.log(replyChat);
        return ctx.telegram.sendMessage(`${replyChatId}`, `Ответ от: \nИмя: ${name}\nТекущий чат ID: ${chatId} \nИмя${name}\nПредыдущий чат ID: ${replyChatId} \nСодержание: ${text} \n 1 <a href="">Ответить</a>`);
    }   else {
        return ctx.telegram.sendMessage('414775835', `Новое сообщение от: \nИмя: ${name}\nТекущий чат ID: ${chatId} \nСодержание: ${text}`);
    }
})
bot.launch();
console.log('Бот запущен');
