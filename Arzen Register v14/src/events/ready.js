const client = global.client;
const conf = require("../configs/sunucuayar.json");
const settings = require("../configs/settings.json")
const {MessageEmbed} = require("discord.js")
module.exports = async () => {
    client.guilds.cache.forEach(async (guild) => {
    const invites = await guild.fetchInvites();
    client.invites.set(guild.id, invites);
  });

  let botVoiceChannel = client.channels.cache.get(conf.botses); 
  if (botVoiceChannel) 
  botVoiceChannel.join().then(e => {
    e.voice.setSelfDeaf(true);
    })
  .then(console.log(`Bot ses kanalına bağlandı!`)).catch(err => console.error("[HATA] Bot ses kanalına bağlanamadı!"));
  client.user.setPresence({ activity: { name: settings.botDurum}, status: "idle" });
  };

module.exports.conf = {
  name: "ready",
};