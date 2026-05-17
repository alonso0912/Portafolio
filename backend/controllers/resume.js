const ResumeItem = require('../models/ResumeItem')

exports.getResume = async (req, res) => {
  try {
    const resumeItems = await ResumeItem.find().sort({ dateRange: -1 })
    res.json(resumeItems)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
