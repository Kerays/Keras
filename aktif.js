const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`⇝ Aktif Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")} 
  Copyright KTC BOT 2020 | Yapımcım: ⇝ Kerays |`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'aktif',
  description: 'Bottaki Aktif Komutları Gösterir!',
  usage: 'aktif'
};
//XiR