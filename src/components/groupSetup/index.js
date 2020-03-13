import React, { useContext, useState } from 'react';
import './styles.scss';
import NameInput from '../../components/nameInput';
import { GroupContext } from '../../contexts/groupContext';

const GroupSetup = ({ groupName, groupIndex }) => {

  const [groups, setTeam] = useContext(GroupContext);

  return (
    <div className="PhaseWrapper GroupSetup">
      <h4>Group {groupName}</h4>
      <NameInput
        teamNumber={1}
        id={groupName + '0'}
        value={groups[groupIndex].teams[0].name}
        setTeam={setTeam}
        groupIndex={groupIndex}
      />

      <NameInput
        teamNumber={2}
        id={groupName + '1'}
        value={groups[groupIndex].teams[1].name}
        setTeam={setTeam}
        groupIndex={groupIndex}
      />

      <NameInput
        teamNumber={3}
        id={groupName + '2'}
        value={groups[groupIndex].teams[2].name}
        setTeam={setTeam}
        groupIndex={groupIndex}
      />
    </div>
  );
}

export default GroupSetup;
