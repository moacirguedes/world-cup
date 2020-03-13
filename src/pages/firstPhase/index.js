import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';

const FirstPhase = () =>

  <div className="FirstPhaseWrapper">
    <MatchFirstPhase group="A" />
    <MatchFirstPhase group="B" />
    <MatchFirstPhase group="C" />
    <MatchFirstPhase group="D" />
    <button className="Button FirstPhase__Button">Next phase</button>
  </div>

export default FirstPhase;
