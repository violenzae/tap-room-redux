import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const remaining = Math.round(props.pints/124 *100.);
  const {buyItem} = props;

  return (
    <React.Fragment>
      
      <div className="col-md-3" onClick= {() => props.whenKegClicked(props.id)}>
        <p>name: {props.name}</p>
        <p>{props.pints} pints remaining, {remaining}%</p>
        <div className="buttons">
        { props.pints <= 0 &&
            <p>out of stock!</p>
        }
        { props.pints < 10 && props.pints > 0 &&
          <div>
            <p>almost empty!</p>
            <button onClick={() => buyItem(props.id)}>buy</button>
          </div>
        }
        { props.pints > 10 &&
          <button onClick={() => buyItem(props.id)}>buy</button>
        }
          {/* <p>buy---restock--delete</p> */}
        </div>
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
  whenKegClicked: PropTypes.func
};

export default Keg;
