const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

/**
 * Defines a Legend Schema
 */
const LegendSchema = new Schema({
  number: Number,
  name: String,
  motto: String,
  type: String,
  bio: String,
  realName: String,
  age: String,
  tacticalAbility: String,
  passiveAbility: String,
  ultimateAbility: String,
  media: {
    movie: String,
    profile: String,
    wallpaper: String,
  },
  abilities: [
    {
      name: String,
      type: String,
      description: String,
      media: String,
    },
  ],
})

// Compile model from schema and export it
module.exports = mongoose.model('Legend', LegendSchema)
