import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const remaining = Math.round(props.pints/124 *100.);


  return (
    <React.Fragment>
      
      <div className="col-md-3" onClick= {() => props.whenKegClicked(props.id)}>
        <p>name: {props.name}</p>
        <p>{props.pints} pints remaining, {remaining}%</p>
      <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,

};

export default Keg;
