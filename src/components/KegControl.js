import React from 'react';
import KegList from './KegList';
// import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  render() {
    let currentlyVisible = null;
    if (this.state.formVisible){
      currentlyVisible = <NewKegForm />
    } else {
      currentlyVisible = <KegList />
    }
    return (
      <React.Fragment>
        {currentlyVisible}
        {/* <KegDetail /> */}
      </React.Fragment>
    );
  }
}

export default KegControl;
