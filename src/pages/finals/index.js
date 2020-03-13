import React from 'react';
import './styles.scss';
import MatchSecondPhase from '../../components/matchSecondPhase';

const Finals = () =>

  <>
    <div >
      <MatchSecondPhase matchType='Third place' />
    </div>

    <div >
      <MatchSecondPhase matchType='Final'/>
    </div>
  </>

export default Finals;
