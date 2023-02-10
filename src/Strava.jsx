import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const redirectUrl = "http://localhost:3000/redirect";
const scope = "profile:read_all"

class Strava extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    // window.location = `http://www.strava.com/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;

    axios
      .get("http://localhost:3000/api/bikes/strava", {validateStatus: false})
      .then((response) => {
        console.log(response);
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