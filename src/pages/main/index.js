import React from 'react';
import './styles.scss';
import Tabs from '../../components/tabs';
import Setup from '../setup';
import FirstPhase from '../firstPhase';
import SecondPhase from '../secondPhase';

const Main = () => {
  return (
    <Tabs>
      <div label="Setup">
        <Setup />
      </div>
      <div label="First Phase">
        <FirstPhase />
      </div>
      <div label="Second Phase">
        <SecondPhase />
      </div>
      <div label="Semi Finals">
        Semi finals content
      </div>
      <div label="Finals">
        Finals content
      </div>
      <div label="Results">
        Results
      </div>
    </Tabs>
  );
}

export default Main;
