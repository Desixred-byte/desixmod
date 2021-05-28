let snipe = require("../snipe.json")
const {MessageEmbed} = require("discord.js")
module.exports = {
    name: "snipe",
    aliases: [],
    run: async({ message, args, client, handler }) => {
      if(!snipe[message.channel.id]) return message.channel.send("Nice Try, but nobody here deleted messages.")
       let msg = snipe[message.channel.id].msg; 
      let author = snipe[message.channel.id].user; 
      let time = snipe[message.channel.id].time; 
      let icon = snipe[message.channel.id].icon; 
       const embed = new MessageEmbed()
       .setTitle(`Someone deleted a message!`)
       .addField("Suspect: ", `<@${author}>`)
       .addField("Message: ", `${msg}`)
       .setColor("303135")
       // .setFooter(`${time}`)
       .setTimestamp(time)
       .setThumbnail(icon) 
    message.channel.send(embed)

    }
}