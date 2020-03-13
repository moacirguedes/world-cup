import React from 'react';
import './styles.scss';
import MatchSecondPhase from '../../components/matchSecondPhase';

const Finals = () =>

  <div className="Finals">
    <div className="Finals__Matches">
      <div>
        <MatchSecondPhase matchType='Third place' />
      </div>

      <div>
        <MatchSecondPhase matchType='Final'/>
      </div>
    </div>

    <button className="Button Finals__Button">End</button>
  </div>

export default Finals;
