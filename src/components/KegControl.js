import React from 'react';
import { connect } from 'react-redux';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';
import * as a from './../actions';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      const action2 = a.deselectKeg();
      dispatch(action2);        
    }
  

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKeg);
    dispatch(action);
  }

  handleBuyingItem = (id) => {
    const { dispatch } = this.props;
    const action = a.buyItem(id);
    dispatch(action);
    // const selectedKeg = this.props.masterKegList[id];
    // const action2 = a.selectKeg(selectedKeg);
    // dispatch(action2);
  }

  render() {
    let currentlyVisible = null;
    let buttonText = null;
    if (this.props.selectedKeg != null){
      currentlyVisible = <KegDetail onBuyItem={this.handleBuyingItem} keg={this.props.selectedKeg}/>
      buttonText = "return to keg list"
    } else if (this.props.formVisible){
      currentlyVisible = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "return to keg list";
    } else {
      currentlyVisible = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />      
      buttonText = "add a new keg";
    }
    return (
      <React.Fragment>
        {currentlyVisible}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
