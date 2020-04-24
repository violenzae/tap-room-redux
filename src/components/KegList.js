import React from 'react';
import Keg from './Keg'
import PropTypes from 'prop-types';

// import masterKegList from './MasterKegList';

function KegList(props) {
  const {onBuyItem} = props;
  const listStyle = {
    paddingTop: '20px'
  }
  return (
    <React.Fragment>
      <div style={listStyle}>
        <h3>KegList</h3><br></br>
        <div className="row">
          {props.kegList.map((keg, index) =>
          <Keg 
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          pints={keg.pints}
          key = {keg.id} 
          id = {keg.id}
          buyItem = {onBuyItem}/>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
