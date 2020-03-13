import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const MatchSecondPhase = ({ group, disabled }) =>

  <div className="PhaseWrapper SecondPhase">
    <Match
      teamOne="First team"
      teamTwo="Second team"
      disabled={disabled}
    />
  </div>

export default MatchSecondPhase;
