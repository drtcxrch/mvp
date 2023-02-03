import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Bike from './Bike';

class Bikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bikes: []}

    this.bikeList = this.bikeList.bind(this);
  }

  componentDidMount() {
    // axios.get('http://localhost:3000/api/bikes')
    //   .then(response => {
    //     this.setState({bikes: response.data});
    //     console.log(response.data);
    //   })
    //   .catch((err) => (
    //     console.log('This is the error!!!',err)
    //   ))
    this.bikeList();
  }

  bikeList() {
    // console.log('bikes!!', this.state.bikes.data);
    axios.get('http://localhost:3000/api/bikes')
      .then(response => {
        this.setState({bikes: response.data});
      })
      .catch((err) => (
        console.log('This is the error!!!',err)
      ))

    if (this.state.bikes.data !== undefined) {
      return this.state.bikes.data.map((currentBike, i) => {
        return <Bike bike={currentBike} key={i} />
      });
    }

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