import React from 'react';
import './styles.scss';
import NameInput from '../../components/nameInput';

const GroupSetup = ({ group }) =>

  <div className="GroupWrapper">
    <h4>Group {group}</h4>
    <NameInput />
    <NameInput />
    <NameInput />
  </div>

export default GroupSetup;
