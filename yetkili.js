const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `KTC Bot ⇝ Yetkili Komutları	
  • ban   :: İstediğiniz kişiyi sunucudan yasaklar.
  • kick    :: İstediğiniz kişiyi sunucudan atar.
  • sustur  :: İstediğiniz kişiyi susturur.
  • temizle :: Mesajları siler.
  • uyar    :: İstediğiniz kişiye uyarı verir.
  • duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
  • unban  :: Ban Kaldirir.
     Copyright KTC BOT 2020 ⇝ | Yapımcım: ⇝ Kerays`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yk'],
    permLevel: "0"
  };
  
  exports.help = {
    name: 'yetkili',
    description: 'Tüm komutları listeler.',
    usage: 'yetkili'
  };