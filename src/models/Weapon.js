const mongoose = require('mongoose')

// Define schema
const Schema = mongoose.Schema

const FireModeSchema = new Schema({
  type: String,
})

const RecoilSchema = new Schema({
  type: String,
})

const AttachmentsSchema = new Schema({
  type: String,
})

const WeaponSchema = new Schema({
  media: String,
  name: String,
  class: String,
  description: String,
  fireModes: [FireModeSchema],
  ammo: String,
  reload: {
    loaded: Number,
    empty: Number,
  },
  magSize: Number,
  damage: {
    body: Number,
    head: Number,
    multiplier: Number,
    maxHeadshotRange: Number,
    dps: {
      body: Number,
      head: Number,
    },
  },
  rpm: Number,
  recoil: [RecoilSchema],
  attachments: [AttachmentsSchema],
})

// Compile model from schema and export it
module.exports = mongoose.model('Weapon', WeaponSchema)
