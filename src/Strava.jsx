import React from 'react';
import ReactDOM from 'react-dom';
// import api from './api/api.js';
import axios from 'axios';

class Strava extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    let config = {
      headers: {
        Authorization: process.env.ACCESS_TOKEN,
      },
    };

    axios
      .get("https://www.strava.com/api/v3/athlete", config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log("Error:", err));
  }

  render() {
    return (
       <div>
         <h1>Home</h1>
         <button onClick={this.handleLogin}>Connect with Strava</button>
       </div>
     )
  }


}

export default Strava;