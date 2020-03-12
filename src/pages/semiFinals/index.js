import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';
import MatchSecondPhase from '../../components/matchSecondPhase';
import MatchSemiFinals from '../../components/matchSemiFinals';

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
      <MatchSemiFinals />
      <MatchSemiFinals />
    </div>
  </>

export default SemiFinals;
