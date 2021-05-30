const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'att',
    category: 'Info',
    useage: '$messages',
    description: 'Shows how many messages does the mentioned member has.',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();


              message.delete()

    message.channel.send('Succesfully messaged that user ,  ' + message.author.tag)
        
        
        user.send(new MessageEmbed()
        .setTitle('**<a:aMI_info_warn:816711161646284841> **ATTENTION** <a:aMI_info_warn:816711161646284841>**')
        .setAuthor('Important Message', 'https://cdn.discordapp.com/attachments/844266656700170261/844576474757333005/desixred-white.png')
        .setURL('https://desixred-bot.tk')
        .addField('__**Steps to Grow**__' , '> Here are the steps to grow and make your server active , make sure to follow all the steps and if this works , vote and give desixred a positive review [**here**](https://top.gg/bot/830461569233977377)')
        .addField('――――――――――――――――――――――――――――' ,'<:invite:814880108350275615> [**Invite desixred to your server**](https://desixred-bot.tk/invite)')
        .addField('――――――――――――――――――――――――――――' , '> <:reload:835886293619048466> Run the \`start-gaining\` command')
        .addField('――――――――――――――――――――――――――――' , '> <:poll:815172261891538954> Start gaining **10,000+** members within a week!')
        .addField('__**Important links**__' , '[<:link:840478753389936640> Desixred Website](https://desixred-bot.tk) | [**<:nitro_boost:831058840279580693>  Claim your 10$ nitro**](https://discord.gg/H24JswcAht)').setColor('303135')
        .setThumbnail('https://cdn.discordapp.com/attachments/832618967242637352/844579000181587968/image0.gif')
        .setDescription("Would you like to **grow** your server and gain over 10,000+ members in a week? <a:a_Discord_Partner:813778565878775858>   If so , read **below**.")
        .setImage('https://cdn.discordapp.com/attachments/844266656700170261/844574090039787591/eee1.gif')
        .setFooter('© Desixred | Advertising', 'https://cdn.discordapp.com/attachments/843083080939733003/848125174288351232/desixred-white.png')
        .setTimestamp() 

    
        )}
} //make a command where i can set channels that won't count

