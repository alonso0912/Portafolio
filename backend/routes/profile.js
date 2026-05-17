const express = require('express')
const { getProfile, updateProfile } = require('../controllers/profile')
const { verifyToken } = require('../middleware/auth')

const router = express.Router()

router.get('/', getProfile)
router.put('/', verifyToken, updateProfile)

module.exports = router
