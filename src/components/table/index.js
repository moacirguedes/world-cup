import React from 'react';
import './styles.scss';
import Row from '../row';

const Table = ({teams}) =>

  <table className="Table">
    <thead>
      <tr className="Table__Header-item">
        <th className="Table__Header">
          Position
        </th>
        <th className="Table__Header">
          Team
        </th>
      </tr>
    </thead>

    <tbody>
      {teams.map((team, index) =>
        <Row
          key={index}
          index={index + 1}
          team={team}
        />
      )}
    </tbody>
  </table>

export default Table;
