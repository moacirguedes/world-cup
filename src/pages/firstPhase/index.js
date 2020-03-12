import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';

const FirstPhase = () =>

  <div className="FirstPhaseWrapper">
    <MatchFirstPhase group="A" />
    <MatchFirstPhase group="B" />
    <MatchFirstPhase group="C" />
    <MatchFirstPhase group="D" />
  </div>

export default FirstPhase;
