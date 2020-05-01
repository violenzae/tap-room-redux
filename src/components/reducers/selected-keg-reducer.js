import * as c from '../../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, alcoholContent, price, pints, id } = action;
  switch (action.type) {
  case c.SELECT_KEG: 
    const thisKeg = {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pints: pints,
        id: id
      }    
      return thisKeg;
      case c.DESELECT_KEG:
        return null;
      default:
        return state;
      }
  }