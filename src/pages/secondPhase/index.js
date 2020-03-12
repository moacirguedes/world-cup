import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';
import MatchSecondPhase from '../../components/matchSecondPhase';

const SecondPhase = () =>

  <>
    <div className="FirstPhaseWrapper">
      <MatchFirstPhase group="A" disabled />
      <MatchFirstPhase group="B" disabled />
      <MatchFirstPhase group="C" disabled />
      <MatchFirstPhase group="D" disabled />
    </div>

    <div className="SecondPhaseWrapper">
      <MatchSecondPhase />
      <MatchSecondPhase />
      <MatchSecondPhase />
      <MatchSecondPhase />
    </div>
  </>

export default SecondPhase;
