import React from 'react';
import './styles.scss';

const NameInput = ({ name, value, number }) =>

  <div className="NameInputWrapper">
    <label htmlFor={name}>Team {number} name:</label>
    <input
      className="Name__Input"
      id={name}
      type="text"
      name={name}
      value={value}
    />
  </div>
  
export default NameInput;
