import React from 'react';
import './styles.scss';

const NameInput = ({ id, teamNumber, groupIndex, value, setTeam }) =>

  <div className="NameInputWrapper">
    <label htmlFor={id}>Team {teamNumber} name:</label>
    <input
      className="Name__Input"
      id={id}
      type="text"
      value={value}
      onChange={(e) => setTeam(groupIndex, teamNumber, e.target.value)}
    />
  </div>
  
export default NameInput;
