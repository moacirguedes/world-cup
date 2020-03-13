import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const MatchSecondPhase = ({ group, disabled, matchType }) =>

  <div className="PhaseWrapper SecondPhase">
    <h4>{matchType}</h4>
    <Match
      teamOne="First team"
      teamTwo="Second team"
      disabled={disabled}
    />
  </div>

export default MatchSecondPhase;
