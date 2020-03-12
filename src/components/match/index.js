import React from 'react';
import './styles.scss';

const Match = ({ teamOne, teamTwo }) =>

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
      />
    </div>

    <div className="Match">
      <label
        htmlFor={teamTwo}
        className="Match__Label"
      >
        {teamTwo}
      </label>
      <input
        className="Match__Input"
        id={teamTwo}
        type="number"
        min={0}
      />
    </div>
  </div>

export default Match;
