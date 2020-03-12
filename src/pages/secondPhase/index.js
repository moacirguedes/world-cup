import React from 'react';
import './styles.scss';
import MatchFirstPhase from '../../components/matchFirstPhase';

const SecondPhase = () =>

<>
  <div className="PhaseWrapper">
    <MatchFirstPhase group="A" disabled />
    <MatchFirstPhase group="B" disabled />
    <MatchFirstPhase group="C" disabled />
    <MatchFirstPhase group="D" disabled />
  </div>

  <div className="PhaseWrapper">
    <MatchFirstPhase group="A" disabled />
    <MatchFirstPhase group="B" disabled />
    <MatchFirstPhase group="C" disabled />
    <MatchFirstPhase group="D" disabled />
  </div>
</>
export default SecondPhase;
