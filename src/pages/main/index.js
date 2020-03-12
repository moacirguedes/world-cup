import React from 'react';
import './styles.scss';
import Tabs from '../../components/tabs';

const Main = () => {
  return (
    <Tabs>
      <div label="Setup">
        First tab content
      </div>
      <div label="First Phase">
        first phase tab content
      </div>
      <div label="Second Phase">
        Second phase tab content
      </div>
      <div label="Semi Finals">
        Semi finals content
      </div>
      <div label="Finals">
        Finals content
      </div>
    </Tabs>
  );
}

export default Main;
