import React, { useState } from 'react';
import './styles.scss';
import Tab from '../tab';

const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(
    children[0].props.label
  );

  return (
    <div>
      <ol className="Tabs__List">
        {children.map((child) => {
          const { label, disabled } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={() => setActiveTab(label)}
              disabled={disabled}
            />
          );
        })}
      </ol>

      <div className="Tab__Content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

export default Tabs;
