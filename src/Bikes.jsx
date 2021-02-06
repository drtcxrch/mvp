import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Bikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bikes: []}
  }

  componentDidMount() {
    axios.get('http:/localhost:3000/bikes')
      .then(response => {
        this.setState({bikes: response.data});
        console.log(response.data);
      })
      .catch((err) => (
        console.log(error)
      ))
  }

  bikeList() {
    return this.state.bikes.map((currentBike, i) => {
      return <Bike bike={currentBike} key={i} />
    });
  }

  render() {
    return (
      <div>
        <h3>Bikes</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Bike Name</th>
              <th>Bike Type</th>
              <th>Bike Mileage</th>
              <th>Chain</th>
              <th>Chainring</th>
              <th>Cassette</th>
              <th>Brake Pads</th>
              <th>Front Tire</th>
              <th>Rear Tire</th>
            </tr>
          </thead>
          <tbody>
            {this.bikeList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Bikes;