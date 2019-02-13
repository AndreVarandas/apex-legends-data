const cache = require('memory-cache')

const { ONE_DAY_MS } = require('../constants')
const Weapon = require('../models/Weapon')

/**
 * Returns all available Weapons.
 *
 * @param req
 * @param res
 * @returns {json}
 */
module.exports.all = (req, res) => {
  /**
   * Get data from the Cache if available
   */
  const cached = cache.get(`weapons`)
  if (Boolean(cached)) {
    return res.status(200).json(cached)
  }

  /**
   * Get data from the db
   */
  Weapon.find((err, weapons) => {
    if (!err) {
      cache.put(`weapons`, weapons, ONE_DAY_MS)
      return res.status(200).json(weapons)
    }

    return res.status(500).json(err)
  })
}

