import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const MatchFirstPhase = ({ group, disabled }) =>

  <div className="PhaseWrapper FirstPhase">
    <h4>Group {group}</h4>

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

    <Match
      teamOne="Second team"
      teamTwo="Third team"
      disabled={disabled}
    />
  </div>

export default MatchFirstPhase;
