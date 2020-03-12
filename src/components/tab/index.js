import React from 'react';
import './styles.scss';

const Tab = ({ activeTab, label, onClick, disabled }) => {

  let className = 'Tab';

  if (activeTab === label) {
    className += ' Tab__Active';
  }

  if (disabled) {
    className += ' Tab__Disabled';
    onClick = () => {};
  }

  return (
    <li
      className={className}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
}

export default Tab;
