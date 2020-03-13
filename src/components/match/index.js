import React from 'react';
import './styles.scss';

const Match = ({ teamOne, teamTwo, disabled }) =>

  <div className="MatchWrapper">
    <div className="Match">
    <label
        htmlFor={teamOne}
        className="Match__Label"
      >
        {teamOne}
      </label>
      <input
        className="Match__Input"
        id={teamOne}
        type="number"
        min={0}
        disabled={disabled}
      />
    </div>
    <span>X</span>
    <div className="Match">
      <input
        className="Match__Input"
        id={teamTwo}
        type="number"
        min={0}
        disabled={disabled}
      />
      <label
        htmlFor={teamTwo}
        className="Match__Label"
      >
        {teamTwo}
      </label>
    </div>
  </div>

export default Match;
