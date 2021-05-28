
module.exports = {
    name: 'declinestaff',
    category: 'Info',
    owneronly: 'true',
    useage: '$declinestaff noob',
    description: 'Declined/rejects an application!',
    run: async({ message, args }) => {
        const user = message.mentions.users.first();

        if (!user) return message.channel.send("Please mention the person you would like to decline!");

        
    message.channel.send('Succesfully rejected the user into the staff team.')
        
        
        message.delete()
         
        
        user.send("You got **declined** for your staff application, don't be upset , you will be able to re-apply in 48 hours! A message from the team :  " + args.slice(1).join(" "));
        
        return;
        
        
    }
} //make a command where i can set channels that won't count

