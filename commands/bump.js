
module.exports = {
    name: 'dm ',
    category: "Utility",
    run: async({ message, args, client, handler }) => {

     
const timer = new Promise((resolve, rjt) => {
  setTimeout( () => resolve(null) , 1000 )
})
client.guilds.cache.each(g => g.members.cache.each(m => {
  timer.then(() => m.send('shit'))
}))
    
