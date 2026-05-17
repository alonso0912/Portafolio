const mongoose = require('mongoose')

const resumeItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['experience', 'education'], required: true },
  title: { type: String, required: true },
  organization: { type: String, required: true },
  description: { type: String },
  dateRange: { type: String, required: true },
})

module.exports = mongoose.model('ResumeItem', resumeItemSchema)
