const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage('Botun yeniden başlatılmasına onay veriyorsanız 30 saniye içinde evet yazın.')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ⇝ Bot Yeniden Başlatılıyor...`)
      process.exit(1);
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ⇝ Bot Yeniden Başlatıldı!`)
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('Yeniden başlatma işlemi iptal edildi.');
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Sahibi"
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır Sadece Bot Sahibi Yapabilir.',
  usage: 'reboot'
};