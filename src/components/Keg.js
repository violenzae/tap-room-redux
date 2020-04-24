import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <hr />
      <div className="col-md-3">
        <p>name: {props.name}</p>
        <p>brand: {props.brand}</p>
        <p>price per pint: ${props.price}</p>
        <p>alcohol content: {props.alcoholContent}%</p>
        <p>pints: {props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number
};

export default Keg;
