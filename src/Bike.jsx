import React from 'react';
import Bikes from './Bikes';

const Bike = (props) => (
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
</tr>
)

export default Bike;