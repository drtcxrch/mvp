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

const Suspension = new Schema(
  fork: {type: Number, required: true},
  shock: {type: Number, required: false},
  dropper: {type: Number, required: false}
  }
)

const Brakes = new Schema(
  pads: {type: Number, required: true},
  cables/housing/bleed: {type: Number, required: true}
)

const Tires = new Schema(
  front: {type: Number,
  required: true},
  rear: {type: Number, required: true}
  sealant: {type: Number,
  required: false}
)

const Bike = new Schema(
  {
    name: {type: String, required: true},
    type: {type: String, required: true},
    mileage: {type: Number, required: true},
    hours: {type: Number,
    required: true},
    drivetrain: {type:[Drivetrain], required: true},
    suspension: {type: [Suspension], required: false},
    brakes: {type: [Brakes], required: false},
    tires: {type: [Tires], required: true}
  }
)

module.exports = mongoose.model('bikes', Bike);