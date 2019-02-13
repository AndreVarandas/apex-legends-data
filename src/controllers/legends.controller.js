const cache = require('memory-cache')

const { ONE_DAY_MS } = require('../constants')
const Legend = require('../models/Legend')

/**
 * Returns all available Legends.
 * Can also receive a query param *name*
 *
 * @param req
 * @param res
 * @returns {json}
 */
module.exports.all = (req, res) => {
  const { name } = req.query
  const query = name ? { name: name.toUpperCase() } : {}

  /**
   * Get data from the Cache if available
   */
  const cached = cache.get(`legends_${query.name}`)
  if (Boolean(cached)) {
    return res.status(200).json(cached)
  }

  /**
   * Get data from the db
   */
  Legend.find(query, (err, legends) => {
    if (!err) {
      cache.put(`legends_${query.name}`, legends, ONE_DAY_MS)
      return res.status(200).json(legends)
    }

    return res.status(500).json(err)
  })
}

/**
 * Returns one Legend by number
 *
 * @param req
 * @param res
 */
module.exports.getOneByNumber = (req, res) => {
  Legend.find({ number: req.params.number }, (err, legend) => {
    if (!err) {
      return res.status(200).json(legend)
    }

    return res.status(500).json(err)
  })
}
