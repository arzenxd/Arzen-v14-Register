const { green } = require("../../configs/emojis.json");
module.exports = {
  conf: {
    aliases: ["log","log-kur"],
    name: "log-kur",
    owner: true,
  },

  run: async (client, message, args) => {
    const parent = await message.guild.channels.create('Artidox Log', { type: 'category' });
    await message.guild.channels.create('taglı-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('invite-log', { type: 'text', parent: parent.id });
    await message.guild.channels.create('komut-log', { type: 'text', parent: parent.id });
    message.channel.send(`${green} Bot loglarının kurulumu başarıyla tamamlanmıştır.`)
}}
