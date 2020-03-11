import React from 'react';
import './styles.scss';

const Radio = ({ id, name, value, text }) =>

  <>
    <input
      className="Radio"
      type="radio"
      id={id}
      name={name}
      value={value}
    />
    <label htmlFor={id}>{text}</label>
  </>

export default Radio;
