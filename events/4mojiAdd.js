module.exports = (client) => {
    client.on('message', message => {
    let emojis = [
    "🤶",
    "❄",
    "🎄",
    "🎅",
    "⛄",
    "☃",
    ]
    
    let msgr = [
    "Hello",
    "Good",
    "Ok",
    "Sorry",
    "Christmas",
    "Holiday",
    "Surprises",
    "Gift",
    "Hi",
    ]
    
    let autoselect = `${emojis[Math.floor(Math.random() * emojis.length)]}`;
    let randommsg = `${msgr[Math.floor(Math.random() * msgr.length)]}`;
    
    if(message.content.startWith(randommsg)) {
    message.react(autoselect)
    
    
    }
})}