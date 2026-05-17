const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  repository: { type: String, required: true },
  url: { type: String },
  technologies: [{ type: String }],
})

module.exports = mongoose.model('Project', projectSchema)
