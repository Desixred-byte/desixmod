const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ngw',
    category: 'Info',
    useage: '$messages',
    description: 'Shows how many messages does the mentioned member has.',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();


              message.delete()

    message.channel.send('Succesfully messaged that user ,  ' + message.author.tag)
        
        
        user.send(new MessageEmbed()
        .setTitle('**Giveaway Notice**')
        .setAuthor('Giveaway Reminder', 'https://cdn.discordapp.com/attachments/844266656700170261/844576474757333005/desixred-white.png')
        .setURL('https://desixred-bot.tk')
        .addField('**When can I claim**' , '> You will be able to claim your rewards from `4-5` days. This depends on the prize you won and how active you are.')
        .addField('**Why that long?**' , '> Its a rule.')
        .setColor('303135')
        .setThumbnail('https://cdn.discordapp.com/attachments/832618967242637352/844579000181587968/image0.gif')
        .setDescription("> Hey , I noticed that you just won a giveaway in our server. If you have questions about claiming the perks , read the text below.")
        .setImage('https://cdn.discordapp.com/attachments/844266656700170261/844574090039787591/eee1.gif')
        .setFooter('Thanks for understanding!', 'https://cdn.discordapp.com/attachments/800272249017466941/844578343319371796/tenor_1.gif')
        .setTimestamp() 

          
    
        )}
} //make a command where i can set channels that won't count

