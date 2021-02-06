const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bike = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
    mileage: {type: Number, required: true},
    chain: {type: Number, required: true},
    chainring: { type: Number, required: true },
    cassette: { type: Number, required: true },
    pads: {type: Number, required: false},
    lines: { type: Number, required: true },
    front: { type: Number, required: true },
    rear: { type: Number, required: true }
  }
)

module.exports = mongoose.model('bikes', Bike);