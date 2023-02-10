const Bike = require('../models/bike-model');
const axios = require('axios');
const dotenv = require("dotenv").config();

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
    bike.chain = body.chain;
    bike.chainring = body.chainring;
    bike.cassette = body.cassette;
    bike.pads = body.pads;
    bike.lines = body.lines;
    bike.front = body.front;
    bike.rear = body.rear;
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
  await Bike.findOne({_id: req.params.id}, (err, bike) => {
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
        .status(204)
        .json({sucess: false, error: 'Bikes not found'})
    }
    return res.status(200).json({sucess: true, data: bikes})
  }).catch(err => console.log(err))
};

getStrava = async (req, res) => {
  //If access token is expired:
  getAccessToken = () => {
    var data = JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      refresh_token: process.env.REFRESH_TOKEN,
      grant_type: "refresh_token",
    });

    var config = {
      method: "post",
      url: "https://www.strava.com/oauth/token",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        let newToken = response.data.access_token;
        getAthlete(newToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //Otherwise:
  getAthlete = (accessToken) => {
    let access_token = accessToken || process.env.ACCESS_TOKEN;
    var config = {
      method: "get",
      url: `https://www.strava.com/api/v3/athlete?access_token=${access_token}`,
      headers: {
        Authorization:
          "Basic" +
          new Buffer.from(
            process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
          ).toString("base64"),
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        error.response.data.errors[0].field === "access_token" &&
        error.response.data.errors[0].code === "invalid"
          ? getAccessToken()
          : null;
      });
  };

  getAthlete();
}

module.exports = {
  createBike,
  updateBike,
  deleteBike,
  getBikes,
  getBikeById,
  getStrava,
};
