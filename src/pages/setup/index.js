import React from 'react';
import './styles.scss';
import GroupSetup from '../../components/groupSetup';
import { GroupProvider } from '../../contexts/groupContext';

const Setup = () =>

  <div className="Setup">
    <GroupProvider>
      <form className="Setup__Groups">
        <GroupSetup groupName="A" groupIndex={0} />
        <GroupSetup groupName="B" groupIndex={1} />
        <GroupSetup groupName="C" groupIndex={2} />
        <GroupSetup groupName="D" groupIndex={3} />
        <button className="Button">Start</button>
      </form>
    </GroupProvider>
  </div>

export default Setup;
