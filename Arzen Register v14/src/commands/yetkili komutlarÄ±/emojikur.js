const { Database } = require("ark.db");
const db = new Database("/src/configs/emojis.json");

module.exports = {
  conf: {
    aliases: [],
    name: "emoji-kur",
    owner: true,
  },

  run: async (client, message, args) => {
    const emojis = [
        { name: `arzen_star`, url: "https://cdn.discordapp.com/emojis/899680497427431424.gif?size=44" },
        { name: `arzen_miniicon`, url: "https://cdn.discordapp.com/emojis/899339236724068372.png?size=44" },
        { name: `arzen_red`, url: "https://cdn.discordapp.com/attachments/827439712834158622/827439875170500629/red.gif" },
        { name: `arzen_green`, url: "https://cdn.discordapp.com/attachments/827439712834158622/827439878664486913/green.gif" },
        { name: `arzen_kirmiziok`, url: "https://cdn.discordapp.com/emojis/901441275381817426.gif?size=44" },
        { name: `arzen_mesaj`, url: "https://cdn.discordapp.com/emojis/838468915814334464.gif?v=1" }
    ]
 emojis.forEach(async (x) => {
      if (message.guild.emojis.cache.find((e) => x.name === e.name)) return db.set(x.name, message.guild.emojis.cache.find((e) => x.name === e.name).toString());
      const emoji = await message.guild.emojis.create(x.url, x.name);
      await db.set(x.name, emoji.toString());
      message.channel.send(`\`${x.name}\` isimli emoji oluşturuldu! (${emoji.toString()})`);
    });
    },
  };
