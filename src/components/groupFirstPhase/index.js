import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const GroupFirstPhase = ({ group, disabled }) =>

  <div className="GroupFirstPhaseWrapper">
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

export default GroupFirstPhase;
