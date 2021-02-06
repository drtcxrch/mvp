import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      mileage: 0,
      chain: 0,
      chainring: 0,
      cassette: 0,
      pads: 0,
      lines: 0,
      front: 0,
      rear: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {

    this.setState({
      [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
    })
  }

  handleSubmit(event) {
    alert('A bike was submitted!');
    console.log(this.state);
    event.preventDefault();
    const newBike = {
      name: this.state.name,
      type: this.state.type,
      mileage: this.state.mileage,
      chain: this.state.chain,
      chainring: this.state.chainring,
      cassette: this.state.cassette,
      pads: this.state.pads,
      lines: this.state.lines,
      front: this.state.front,
      rear:this.state.rear
    }

    axios.post('http://localhost:3000/api/bike', newBike);

    this.setState({
      name: '',
      type: '',
      mileage: 0,
      chain: 0,
      chainring: 0,
      cassette: 0,
      pads: 0,
      lines: 0,
      front: 0,
      rear: 0
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Bike name:
          <input
            name="name"
            type="text"
            onChange={this.handleInputChange} />
          </label>
          <br />
        <label>
          Bike type:
          <input
            name="type"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Bike mileage:
          <input
            name="mileage"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Chain:
          <input
            name="chain"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Chainring:
          <input
            name="chainring"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Cassette:
          <input
            name="cassette"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Pads:
          <input
            name="pads"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Lines:
          <input
            name="lines"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Front:
          <input
            name="front"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Rear:
          <input
            name="rear"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Add Bike!</button>
      </form>
    )
  }
}

export default AddBike;