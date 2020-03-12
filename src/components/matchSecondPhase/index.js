import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const MatchSecondPhase = ({ group, disabled }) =>

  <div className="MatchSecondPhaseWrapper">
    <Match
      teamOne="First team"
      teamTwo="Second team"
      disabled={disabled}
    />

    <Match
      teamOne="Second team"
      teamTwo="Third team"
      disabled={disabled}
    />
  </div>

export default MatchSecondPhase;
