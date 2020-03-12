import React from 'react';
import './styles.scss';
import Match from '../match';

const MatchSemiFinals = ({ matchType, disabled }) =>

  <div className="MatchSemiFinalsWrapper">
    <Match
      teamOne="First team"
      teamTwo="Second team"
    />
  </div>

export default MatchSemiFinals;
