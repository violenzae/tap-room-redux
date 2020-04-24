import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function Header() {
  const headerStyle = {
    color: 'white'
  }
  return (
    <React.Fragment>
      <div style={headerStyle} className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1>Pierre's Pub</h1>
      </div>
    </React.Fragment>
  );
}

export default Header;
