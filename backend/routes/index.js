const express = require('express')
const router = express.Router()

router.use('/services', require('./services'))
router.use('/projects', require('./projects'))
router.use('/skills', require('./skills'))
router.use('/resume', require('./resume'))
router.use('/profile', require('./profile'))
router.use('/auth', require('./auth'))
router.use('/contact', require('./contact'))

module.exports = router
