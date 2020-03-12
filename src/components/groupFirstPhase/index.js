import React from 'react';
import './styles.scss';
import Match from '../../components/match';

const GroupFirstPhase = ({ group }) =>

  <div className="GroupFirstPhaseWrapper">
    <h4>Group {group}</h4>

      <Match
        teamOne="First team"
        teamTwo="Second team"
      />

      <Match
        teamOne="Second team"
        teamTwo="Third team"
      />

      <Match
        teamOne="Second team"
        teamTwo="Third team"
      />
  </div>

export default GroupFirstPhase;
