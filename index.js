var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
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
    return ctx.telegram.sendMessage('414775835', `Нвое сообщение от ${name} \nСодержание: ${text}`);
})

console.log('Бот запущен');
