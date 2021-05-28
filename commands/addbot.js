const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "addbot",
    category: "Utility",
    run: async({ message, args, client, handler }) => {
        message.delete()
        
    message.channel.send('Succesfully requested to add your bot , please wait till staff team views your bot and adds it!' + message.author.tag)
        const channel = client.channels.cache.get("838283642178109531");
    
        if (!channel) return message.reply("sorry too dumb to get the channel");

        channel.send("", {
            embed: new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("New Bot request!")
            .setDescription(args.join(" "))
            .setFooter("Don't accept bots that are SUS!")
            

        }
        )}
}
