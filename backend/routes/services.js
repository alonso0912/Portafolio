const express = require('express')
const { getServices } = require('../controllers/services')

const router = express.Router()

router.get('/', getServices)

module.exports = router
