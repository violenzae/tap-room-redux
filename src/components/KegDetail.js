import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegDetail(props) {
  const {keg} = props;

  return (
    <React.Fragment>
      <h3>{keg.name} Details</h3>
      <p>brand: {keg.brand}</p>
      <p>price per pint: ${keg.price}</p>
      <p>alcohol content: {keg.alcoholContent}%</p>
      <p>pints: {keg.pints}</p>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;
