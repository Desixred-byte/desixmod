const mongoose = require('mongoose')

const bumpSchema = new mongoose.Schema({
    guild: { type: String, required: true },
    channeId: { type: String, required: true  }

})

module.exports = mongoose.model('bump', bumpSchema)