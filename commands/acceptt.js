
module.exports = {
    name: 'acceptstaff',
    category: 'Info',
    useage: '$messages',
    description: 'Shows how many messages does the mentioned member has.',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();

        if (!user) return message.channel.send("Mention someone!");

        
    message.delete()
    
    message.channel.send('Succesfully accepted the user into the staff team.')
        

        
        user.send("You got **accepted** into the staff team , congratulations! A message from the team :  " + args.slice(1).join(" "));
        
        return;
        
    }
} //make a command where i can set channels that won't count

