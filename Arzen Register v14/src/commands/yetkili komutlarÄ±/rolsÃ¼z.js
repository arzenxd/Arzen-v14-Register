const Discord = require("discord.js");
const settings = require("../../configs/settings.json");
const conf = require("../../configs/sunucuayar.json")

module.exports = {
  conf: {
    aliases: [],
    name: "rolsüz",
    owner: true,
  },

  run: async (client, message, args, embed) => {
    let artidox = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)
    if(args[0] == "ver") {
      artidox.forEach(r => {
    r.roles.add(conf.unregRoles)
    })
    message.channel.send(embed
    .setDescription("Sunucuda rolü olmayan \`"+ artidox.size +"\` kişiye kayıtsız rolü verildi!"))
    } else if(!args[0]) {
    message.channel.send(embed
    .setDescription("Sunucumuzda rolü olmayan \`"+ artidox.size +"\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!"))    
}
  },
};
 