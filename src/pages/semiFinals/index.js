import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';
import MatchSecondPhase from '../../components/matchSecondPhase';

const SemiFinals = () =>

  <>
    <div className="FirstPhaseWrapper">
      <MatchFirstPhase group="A" disabled />
      <MatchFirstPhase group="B" disabled />
      <MatchFirstPhase group="C" disabled />
      <MatchFirstPhase group="D" disabled />
    </div>

    <div className="SecondPhaseWrapper">
      <MatchSecondPhase disabled />
      <MatchSecondPhase disabled />
      <MatchSecondPhase disabled />
      <MatchSecondPhase disabled />
    </div>

    <div className="SemiFinalsWrapper">
      <MatchSecondPhase />
      <MatchSecondPhase />
    </div>
  </>

export default SemiFinals;
