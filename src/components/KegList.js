import React from 'react';
import Keg from './Keg'
import PropTypes from 'prop-types';

// import masterKegList from './MasterKegList';

function KegList(props) {
  return (
    <React.Fragment>
      <h3>KegList</h3>
      <div className="row">
        {props.kegList.map((keg, index) =>
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

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
