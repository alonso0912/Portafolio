const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  summary: { type: String, required: true },
  cvUrl: { type: String, default: '/CV.pdf' },
})

module.exports = mongoose.model('Profile', profileSchema)
