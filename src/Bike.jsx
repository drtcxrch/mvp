import React from 'react';
import Bikes from './Bikes';

class Bike extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      bike: {...props.bike}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ bike: {
       ...this.state.bike, [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
      }
    })
  }

  render() {
      if (this.state.isEditing) {
        return (
        <tr>
          <td><input placeholder={this.state.bike.name}
            name="name"
            type="text"
            onChange={this.handleInputChange} /></td>
          <td><input placeholder={this.props.bike.type} /></td>
          <td><input placeholder={this.props.bike.mileage} /></td>
          <td><input placeholder={this.props.bike.chain} /></td>
          <td><input placeholder={this.props.bike.chainring} /></td>
          <td><input placeholder={this.props.bike.cassette} /></td>
          <td><input placeholder={this.props.bike.pads} /></td>
          <td><input placeholder={this.props.bike.lines} /></td>
          <td><input placeholder={this.props.bike.front} /></td>
          <td><input placeholder={this.props.bike.rear} /></td>
          <td><button onClick={() => this.setState({isEditing: false}, this.props.handleEdit(this.state.bike))}>save</button></td>
        </tr>
        )
      } else {
        return (
        <tr>
          <td>{this.props.bike.name}</td>
          <td>{this.props.bike.type}</td>
          <td>{this.props.bike.mileage}</td>
          <td>{this.props.bike.chain}</td>
          <td>{this.props.bike.chainring}</td>
          <td>{this.props.bike.cassette}</td>
          <td>{this.props.bike.pads}</td>
          <td>{this.props.bike.lines}</td>
          <td>{this.props.bike.front}</td>
          <td>{this.props.bike.rear}</td>
          <td><button onClick={() => this.setState({isEditing: true})}>edit</button></td>
          <td><button onClick={() => this.props.handleDelete(this.props.bike)}>delete</button></td>
        </tr>
        )
      }
  }

}

export default Bike;