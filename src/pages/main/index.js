import React from 'react';
import './styles.scss';
import Tabs from '../../components/tabs';

const Main = () => {
  return (
    <Tabs>
      <div label="First">
        First tab content
      </div>
      <div label="Second">
        Second tab content
      </div>
      <div label="Last">
        Last tab content
      </div>
    </Tabs>
  );
}

export default Main;
