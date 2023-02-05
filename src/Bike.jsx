import React from 'react';
import Bikes from './Bikes';

const Bike = (props) => {
  return (
  <tr>
    <td>{props.bike.name}</td>
    <td>{props.bike.type}</td>
    <td>{props.bike.mileage}</td>
    <td>{props.bike.chain}</td>
    <td>{props.bike.chainring}</td>
    <td>{props.bike.cassette}</td>
    <td>{props.bike.pads}</td>
    <td>{props.bike.lines}</td>
    <td>{props.bike.front}</td>
    <td>{props.bike.rear}</td>
    <td><button>edit</button></td>
    <td><button onClick={() => props.handleDelete(props.bike)}>delete</button></td>
  </tr>
  )
}

export default Bike;