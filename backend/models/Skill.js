const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{ type: String, required: true }],
})

module.exports = mongoose.model('Skill', skillSchema)
