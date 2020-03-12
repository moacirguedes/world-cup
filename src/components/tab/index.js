import React from 'react';
import './styles.scss';

const Tab = ({ activeTab, label, onClick }) => {

  let className = 'Tab';

  if (activeTab === label) {
    className += ' Tab__Active';
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
