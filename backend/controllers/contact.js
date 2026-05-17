const Message = require('../models/Message')

exports.sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body)
    await message.save()
    res.status(201).json({ message: 'Mensaje enviado correctamente' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
