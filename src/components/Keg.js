import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <h3>Keg</h3>
      <p>name: {props.name}</p>
      <p>brand: {props.brand}</p>
      <p>price: {props.price}</p>
      <p>alcohol content: {props.alcoholContent}%</p>
      <p>pints: {props.pints}</p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number
};

export default Keg;
