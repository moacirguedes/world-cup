import React from 'react';
import './styles.scss';
import GroupFirstPhase from '../../components/groupFirstPhase';

const SecondPhase = () =>

<>
  <div className="PhaseWrapper">
    <GroupFirstPhase group="A" disabled />
    <GroupFirstPhase group="B" disabled />
    <GroupFirstPhase group="C" disabled />
    <GroupFirstPhase group="D" disabled />
  </div>

  <div className="PhaseWrapper">
    <GroupFirstPhase group="A" disabled />
    <GroupFirstPhase group="B" disabled />
    <GroupFirstPhase group="C" disabled />
    <GroupFirstPhase group="D" disabled />
  </div>
</>
export default SecondPhase;
