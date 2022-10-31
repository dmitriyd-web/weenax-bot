const PORT = process.env.PORT || 8000;
const { Telegraf } = require('telegraf');

const bot = new Telegraf('5720289702:AAGeqb6UHfgodGxCvKyvCGwyHew8eLJ6bb4');
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
bot.on('text', (ctx) => {
    //const allInfo = Object.keys(ctx.messagee);
    const text = ctx.message.text;
    const name = ctx.message.from.first_name;
    //return ctx.reply(`Ваше сообщение: ${text} \nВаше имя: ${name}`);
    //return ctx.telegram.sendMessage('414775835', `Нвое сообщение от ${name} \nСодержание: ${text}`);
    console.log(text);
})
bot.launch();
console.log('Бот запущен');
