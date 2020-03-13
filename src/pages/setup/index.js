import React from 'react';
import './styles.scss';
import GroupSetup from '../../components/groupSetup';

const Setup = () =>

  <div className="Setup">
    <div className="Setup__Groups">
      <GroupSetup group="A"/>
      <GroupSetup group="B"/>
      <GroupSetup group="C"/>
      <GroupSetup group="D"/>
    </div>
    <button className="Button">Start</button>
  </div>

export default Setup;
