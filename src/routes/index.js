const express = require('express')
const router = express.Router()

/**
 * Controllers
 */
const ctrlLegends = require('../controllers/legends.controller')
const ctrlWeapons = require('../controllers/weapons.controller')

/**
 * Routes
 */
router.get('/legends', ctrlLegends.all)
router.get('/legends/:number', ctrlLegends.getOneByNumber)

router.get('/weapons', ctrlWeapons.all)

module.exports = router
