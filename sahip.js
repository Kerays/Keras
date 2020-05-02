const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `KTC Bot ⇝ Bot Sahibi Komutları
    • reboot    :: Botu Yeniden Başlatır.
    • herkesedm :: Herkese Dm Atip Duyuru Yapabilirsiniz
     Copyright KTC BOT 2020 ⇝ | Yapımcım: ⇝ Kerays`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sp'],
    permLevel: "0"
  };
  
  exports.help = {
    name: 'sahip',
    description: 'Tüm komutları listeler.',
    usage: 'sahip'
  };