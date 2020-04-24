import React from 'react';
import Keg from './Keg'
import masterKegList from './MasterKegList';

function KegList() {
  return (
    <React.Fragment>
      <h3>KegList</h3>
      <div className="row">
        {masterKegList.map((keg, index) =>
        <Keg 
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        pints={keg.pints}
        key = {index} />
        )}
      </div>
    </React.Fragment>
  );
}

export default KegList;
