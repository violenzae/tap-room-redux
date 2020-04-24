import React from 'react';
import beer from '../img/beer.png';

function Header() {
  const headerStyle = {
    color: 'white',
    width: '100%'
  }
  const beerStyle = {
    width: '50px',
    paddingLeft: '20px'

  }
  return (
    <React.Fragment>
      <div style={headerStyle} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>Pierre's Pub</h1>
        <div id="beerDiv">
          <img style={beerStyle} src={beer}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
