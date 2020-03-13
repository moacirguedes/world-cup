import React, { useState, createContext } from 'react';
import * as Team from '../models/team';

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {

  const [groups, setGroups] = useState([
    {
      teams: [{
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      }]
    },
    {
      teams: [{
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      }]
    },
    {
      teams: [{
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      }]
    },
    {
      teams: [{
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      },
      {
        name: '',
        goals: 0
      }]
    }
  ]);

  const setTeam = (groupIndex, teamIndex, team) => {
    setGroups(
      Team.addGroup(groupIndex, teamIndex, team, groups)
    );
    console.log(groups)
  }
  return (
    <GroupContext.Provider value={[groups, setTeam]}>
      {children}
    </GroupContext.Provider>
  );
}
