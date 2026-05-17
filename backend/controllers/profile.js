const Profile = require('../models/Profile')

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne()
    if (!profile) return res.status(404).json({ error: 'Perfil no encontrado' })
    res.json(profile)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
    })
    res.json(profile)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
