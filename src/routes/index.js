const express = require('express')
const router = express.Router()

/**
 * Controllers
 */
const ctrlLegends = require('../controllers/legends')

/**
 * Routes
 */
router.get('/legends', ctrlLegends.all)
router.get('/legends/:number', ctrlLegends.getOneByNumber)

module.exports = router
