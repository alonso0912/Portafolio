const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' })
    }

    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    })
    if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(401).json({ error: 'Credenciales inválidas' })

    const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    })

    res.json({ token, user: { name: user.name, email: user.email, role: user.role } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
