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
        console.log(error);
      ))
  }

  render() {
    return (
      <div>
        <h3>Bikes</h3>
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.todoList()} */}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Bikes;