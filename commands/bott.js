const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'botnotice',
    category: 'Info',
    useage: '$messages',
    description: 'Shows how many messages does the mentioned member has.',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();


              message.delete()

    message.channel.send('Succesfully messaged that user ,  ' + message.author.tag)
        
        
        user.send(new MessageEmbed()
        .setTitle('**Add bot Notice**')
        .setAuthor('Bot Add rewards reminder', 'https://cdn.discordapp.com/attachments/844266656700170261/844576474757333005/desixred-white.png')
        .setURL('https://desixred-bot.tk')
        .addField('**When can I claim**' , '> You will be able to claim your reward in `3` days. This depends on the amount of the members  and how active you are.')
        .addField('**Why that long?**' , '> It takes time till the bot shards the guild and fetchs members and once had "instant" perk claim , and since we rolled out that update people started scamming us. They claimed their rewards and then just kick the bot and leave the server.')
        .setColor('303135')
        .setThumbnail('https://cdn.discordapp.com/attachments/832618967242637352/844579000181587968/image0.gif')
        .setDescription("> Hey , I noticed that you just added desixred to your server. If you have questions about claiming the perks , read the text below.")
        .setImage('https://cdn.discordapp.com/attachments/844266656700170261/844574090039787591/eee1.gif')
        .setFooter('Thanks for understanding!', 'https://cdn.discordapp.com/attachments/843083088250798120/845730313388556308/image0.gif')
        .setTimestamp() 

          
    
        )}
} //make a command where i can set channels that won't count

