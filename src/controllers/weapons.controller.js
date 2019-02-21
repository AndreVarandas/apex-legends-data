const cache = require('memory-cache')

const { ONE_DAY_MS } = require('../constants')
const Weapon = require('../models/Weapon')

/**
 * Returns all available Weapons.
 * Can also receive a query param *weaponClass*
 *
 * @param req
 * @param res
 * @returns {json}
 */
module.exports.all = (req, res) => {
  const { weaponClass } = (req.query)
  const query = weaponClass ? { class: weaponClass.toUpperCase() } : {}

  /**
   * Get data from the Cache if available
   */
  const cached = cache.get(`weapons_${query.weaponClass}`)
  if (cached) {
    return res.status(200).json(cached)
  }

  /**
   * Get data from the db
   */
  Weapon.find(query, (err, weapons) => {
    if (!err) {
      cache.put(`weapons_${query.class}`, weapons, ONE_DAY_MS)
      return res.status(200).json(weapons)
    }

    return res.status(500).json(err)
  })
}

