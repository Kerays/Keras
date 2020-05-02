const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `| KTC Bot ⇝ Tum Komutlar |
⇝ k!yetkili :: Yetkili komutlarini gosterir. |
⇝ k!kullanıcı :: Kullanıcı komutlarını gösterir. |
⇝ k!ekstra :: Ekstra komutları gösterir. |
⇝ k!sahip :: Bot sahibine ozel komutlari gosterir. |
⇝ Aktif Komutlar İçin k!aktif |
  Copyright KTC BOT 2020 ⇝ | Yapımcım: ⇝ Kerays |
`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komutlar', 'list', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd'],
    permLevel: "0"
  };
  
  exports.help = {
    name: 'komutlar',
    description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
    usage: 'komutlar'
  };