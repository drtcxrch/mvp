const Bike = require('../models/bike-model');

createBike = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a bike'
    })
  }

  const bike = new Bike(body);

  if (!bike) {
    return res.status(400).json({success: false, error: err});
  }

  bike
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: bike._id,
        message: 'Bike created!'
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Bike not created!'
      })
    })
};

updateBike = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    })
  }

  Bike.findOne({_id: req.params.id}, (err, bike) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Bike not found!'
      })
    }

    bike.name = body.name;
    bike.type = body.type;
    bike.mileage = body.mileage;
    bike.hours = body.hours;
    bike.drivetrain = body.drivetrain;
    bike.suspension = body.suspension;
    bike.brakes = body.brakes;
    bike.tires = body.tires;
    bike
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: bike._id,
          message: 'Bike updated!'
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Bike not updated!'
        })
      })
  })
};

deleteBike = async (req, res) => {
  await Bike.findOneAndDelete({_id: req.params.id}, (err, bike) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }

    if (!bike) {
      return res
        .status(404)
        .json({success: false, error: 'Bike not found'})
    }

    return res.status(200).json({success: true, data: bike})
  }).catch(err => console.log(err))
};

getBikeById = async (req, res) => {
  await Bike.findOne({_.id: req.params.id}, (err, bike) => {
    if (err) {
      return res.status(400).json({success: false, error: err})
    }

    if (!bike) {
      return res
        .status(404)
        .json({success: false, error: 'Bike not found'})
    }
    return res.status(200).json({success: true, data: bike})
  }).catch(err => console.log(err))
};

getBikes = async (req, res) => {
  await Bike.find({}, (err, bikes) => {
    if (err) {
      return res.status(400).json({sucess: false, error: err})
    }
    if (!bikes.length) {
      return res
        .status(404)
        .json({sucess: false, error: 'Bike not found'})
    }
    return res.satatus(200).json({sucess: true, data: movies})
  }).catch(err => console.log(err))
};

module.exports = {
  createBike,
  updateBike,
  deleteBike,
  getBikes,
  getBikeById
}
