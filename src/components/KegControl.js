import React from 'react';
import { connect } from 'react-redux';
import KegList from './KegList';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
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
    const { dispatch } = this.props;
    const { name, brand, alcoholContent, price, pints, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      pints: pints,
      id: id
    };
    dispatch(action);
    this.setState({formVisible: false})
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterTicketList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleBuyingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'BUY_ITEM',
      id: id
    };
    dispatch(action);
    // this.setState({selectedKeg: newItem})
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
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;
