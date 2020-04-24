import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import masterKegList from './MasterKegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      masterKegList: masterKegList,
      selectedKeg: null
    };
  }
  handleClick = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisible: false,
        selectedKeg: null
      })
      } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisible: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingItem = (id) => {
    const selectedItem = this.state.masterKegList.filter(item => item.id === id)[0];
    const newItemInfo = selectedItem.pints -1;
    const removingOldItem = this.state.masterKegList.filter(item => item.id !== id);
    const newItem = {...selectedItem, pints: newItemInfo};
    const newmasterKegList = removingOldItem.concat(newItem);
    this.setState({ masterKegList: newmasterKegList, selectedKeg: newItem})
  }

  render() {
    let currentlyVisible = null;
    let buttonText = null;
    if (this.state.selectedKeg != null){
      currentlyVisible = <KegDetail onBuyItem={this.handleBuyingItem} keg={this.state.selectedKeg}/>
      buttonText = "return to keg list"
    } else if (this.state.formVisible){
      currentlyVisible = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "return to keg list";
    } else {
      currentlyVisible = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />      
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
