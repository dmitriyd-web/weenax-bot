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
        const replyChatId = ctx.message.reply_to_message?.chat.id;
        if ( replyChatId ) {
            const replyMessage = ctx.message;
            const replyChatText = ctx.message.reply_to_message.text;
            const replyChatTextUser = replyChatText.split(" ", 1);
            const replyChatTextUserKeys = Object.keys(replyChatTextUser);
            const replyChatTextUserId = replyChatTextUser[replyChatTextUserKeys[0]];
            return ctx.telegram.sendMessage(`${replyChatTextUserId}`, `Ответ поддержки: ${text}`);
        }   else {
            return ctx.telegram.sendMessage('414775835', 'Для отправки сообщения нажмите "Ответить"');
        }
    }   else {
        return ctx.telegram.sendMessage('414775835', `${chatId} Новое сообщение от: \nИмя: ${name}\nТекст сообщения: ${text}`);
    }
})
bot.launch();
console.log('Бот запущен');
