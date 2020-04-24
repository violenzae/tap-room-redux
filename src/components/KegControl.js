import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';

function KegControl() {
  return (
    <React.Fragment>
      <h3>KegControl</h3>
      <KegList />
      <KegDetail />
      <NewKegForm />
    </React.Fragment>
  );
}

export default KegControl;
