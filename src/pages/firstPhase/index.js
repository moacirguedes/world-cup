import React from 'react';
import './styles.scss';
import GroupFirstPhase from '../../components/groupFirstPhase';

const FirstPhase = () =>

  <div className="FirstPhaseWrapper">
    <GroupFirstPhase group="A" />
    <GroupFirstPhase group="B" />
    <GroupFirstPhase group="C" />
    <GroupFirstPhase group="D" />
  </div>

export default FirstPhase;
