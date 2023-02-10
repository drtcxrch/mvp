var axios = require("axios");
const dotenv = require("dotenv").config();

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
        let newToken = response.data.access_token
        getAthlete(newToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    //Otherwise:
  getAthlete = (accessToken) => {
    let access_token = accessToken || process.env.ACCESS_TOKEN
    var config = {
      method: "get",
      url: `https://www.strava.com/api/v3/athlete?access_token=${access_token}`,
      headers: {
        Authorization: 'Basic' + new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')
      },
    };
     axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        error.response.data.errors[0].field === 'access_token' && error.response.data.errors[0].code === 'invalid'
        ? getAccessToken() : null
      });
  };


  getAthlete();
}

getStrava();
