import React from 'react';
import ReactDOM from 'react-dom';

//import components
import AddBike from './AddBike';
import Bikes from './Bikes';

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
        <AddBike />
        <Bikes />
      </div>
    )
  }

}



export default App;
