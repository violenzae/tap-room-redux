import React from 'react';
import Keg from './Keg'
import PropTypes from 'prop-types';

// import masterKegList from './MasterKegList';

function KegList(props) {

  const listStyle = {
    paddingTop: '20px'
  }
  return (
    <React.Fragment>
      <div style={listStyle}>
        <h3>kegList</h3><br />
        <p>click one for more details</p><br />
        <div className="row">
          {Object.values(props.kegList).map((keg) => {
            return <Keg 
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            key = {keg.id} 
            id = {keg.id}/>
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;
