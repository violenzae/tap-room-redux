import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function KegDetail(props) {
  const {keg, onBuyItem} = props;
  const remaining = Math.round(keg.pints/124 *100.);

  return (
    <React.Fragment>
      <h3>{keg.name} Details</h3>
      <p>brand: {keg.brand}</p>
      <p>price per pint: ${keg.price}</p>
      <p>alcohol content: {keg.alcoholContent}%</p>

      <p>{keg.pints} pints remaining, {remaining}%</p>
        <div className="buttons">
        { keg.pints <= 0 &&
            <p>out of stock!</p>
        }
        { keg.pints <= 10 && keg.pints > 0 &&
          <div>
            <p>almost empty!</p>
            <button onClick={() => onBuyItem(keg.id)}>sell</button>
          </div>
        }
        { keg.pints > 10 &&
          <button onClick={() => onBuyItem(keg.id)}>sell</button>
        }
          {/* <p>buy---restock--delete</p> */}
        </div>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onBuyItem: PropTypes.func
}

export default KegDetail;
