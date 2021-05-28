
module.exports = {
    name: 'bump ',
    category: "Utility",
    aliases: [],
    permissions: [],
    permissionsMessage: 'You need to have ADMINISTRATOR to run this command.',
    run: async({ message, args, client, handler }) => {

        handler.prefixes.set(message.guild.id, args[0])
    }
}
//check discord 