import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      mileage: '',
      chain: '',
      chainring: '',
      cassette: '',
      pads: '',
      lines: '',
      front: '',
      rear: ''
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
      mileage: '',
      chain: '',
      chainring: '',
      cassette: '',
      pads: '',
      lines: '',
      front: '',
      rear: ''
    });


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Bike name:
          <input
            value={this.state.name}
            name="name"
            type="text"
            onChange={this.handleInputChange} />
          </label>
          <br />
        <label>
          Bike type:
          <input
            value={this.state.type}
            name="type"
            type="text"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Bike mileage:
          <input
            value={this.state.mileage || ''}
            name="mileage"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Chain:
          <input
            value={this.state.chain || ''}
            name="chain"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Chainring:
          <input
            value={this.state.chainring || ''}
            name="chainring"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Cassette:
          <input
            value={this.state.cassette || ''}
            name="cassette"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Pads:
          <input
            value={this.state.pads || ''}
            name="pads"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Lines:
          <input
            value={this.state.lines || ''}
            name="lines"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Front:
          <input
            value={this.state.front || ''}
            name="front"
            type="number"
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Rear:
          <input
            value={this.state.rear || ''}
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