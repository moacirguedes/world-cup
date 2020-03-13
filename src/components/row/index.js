import React from 'react';
import './styles.scss';

const Row = ({ team, index }) =>

  <tr>
    <td className="Table__Cell">{index}</td>
    <td className="Table__Cell">{team}</td>
  </tr>

export default Row;
