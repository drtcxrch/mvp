const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Drivetrain = new Schema(
  {
    chain: {type: Number, required: true},
    chainring: {type: Number,
    required: true},
    cassette: {type: Number,
    required: true}
  }
)

const Brakes = new Schema(
  {
  pads: {type: Number, required: true},
  lines: {type: Number, required: true}
  }
)

const Tires = new Schema(
  {
  front: {type: Number,
  required: true},
  rear: {type: Number, required: true}
  }
)

const Bike = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
    mileage: {type: Number, required: true},
    drivetrain: {type:[Drivetrain], required: true},
    brakes: {type: [Brakes], required: false},
    tires: {type: [Tires], required: true}
  }
)

module.exports = mongoose.model('bikes', Bike);