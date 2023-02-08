import React from 'react';
import ReactDOM from 'react-dom';

//import components
import FormBike from './FormBike';
import Bikes from './Bikes';
import Strava from './Strava'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <div className="App">
        <div>Bike Component Wear Tracker</div>
        <Strava />
        <FormBike />
        <Bikes />
      </div>
    )
  }

}



export default App;
