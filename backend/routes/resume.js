const express = require('express')
const { getResume } = require('../controllers/resume')

const router = express.Router()

router.get('/', getResume)

module.exports = router
