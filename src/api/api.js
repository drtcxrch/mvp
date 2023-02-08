const dotenv = require("dotenv").config();
const axios = require("axios").default;

let config = {
  headers: {
    Authorization: process.env.ACCESS_TOKEN,
  },
};

axios
  .get("https://www.strava.com/api/v3/athlete", config)
  .then((response) => {
    console.log(response.data.bikes);
  })
  .catch((err) => console.log("Error:", err));
