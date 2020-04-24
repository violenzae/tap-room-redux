import React from 'react';
import KegList from './KegList';
// import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import masterKegList from './MasterKegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: masterKegList
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisible: false})
  }

  render() {
    let currentlyVisible = null;
    let buttonText = null;
    if (this.state.formVisible){
      currentlyVisible = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "return to keg list";
    } else {
      currentlyVisible = <KegList kegList={this.state.masterKegList} />      
      buttonText = "add a new keg";
    }
    return (
      <React.Fragment>
        {currentlyVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
        {/* <KegDetail /> */}
      </React.Fragment>
    );
  }
}

export default KegControl;
