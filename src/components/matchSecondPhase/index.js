import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const MatchSecondPhase = ({ group, disabled }) =>

  <div className="MatchSecondPhaseWrapper">
    <Match
      teamOne="First team"
      teamTwo="Second team"
    />

    <Match
      teamOne="Second team"
      teamTwo="Third team"
    />
  </div>

export default MatchSecondPhase;
