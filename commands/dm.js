
module.exports = {
    name: 'message',
    category: 'Info',
    useage: '$messages',
    description: 'Shows how many messages does the mentioned member has.',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();

        if (!user) return message.channel.send("Mention someone!");
        
        if (!args[1]) return message.channel.send("Where's the message?");

              message.delete()

    message.channel.send('Succesfully messaged that user ,  ' + message.author.tag)
        
        
        user.send("*Message sent by " + message.author.tag + "*\n" + args.slice(1).join(" "));
        
        return;
        
    }
} //make a command where i can set channels that won't count

