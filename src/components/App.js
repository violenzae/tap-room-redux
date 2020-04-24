import React from 'react';
import Header from './Header';
import KegControl from './KegControl';


function App() {
  const panelStyle= {
    backgroundColor: "#e8b13b"
  }
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div style={panelStyle} className="panel rounded d-flex justify-content-center">
          <KegControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
