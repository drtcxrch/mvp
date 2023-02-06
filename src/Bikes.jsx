import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Bike from './Bike';

class Bikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bikes: []}

    this.bikeList = this.bikeList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.bikeList();
  }

  handleDelete(bike) {
    axios.delete(`http://localhost:3000/api/bike/${bike._id}`)
      .then(response => console.log('Delete successful'))
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  handleEdit(bike) {
    console.log(bike)
    axios.put(`http://localhost:3000/api/bike/${bike._id}`, bike)
      .then(response => console.log('Edit successful'))
      .catch(error => {
        console.error('There was an error!', error);
    });
  }

  bikeList() {

    axios.get('http://localhost:3000/api/bikes', {validateStatus: false})
      .then(response => {
        this.setState({bikes: response.data});
      })
      .catch((err) => (
        console.log('This is the error!!!',err)
      ))

    if (this.state.bikes.data !== undefined) {
      return this.state.bikes.data.map((currentBike, i) => {
        return <Bike bike={currentBike} key={i} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
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