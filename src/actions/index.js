import * as c from './ActionTypes';


export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
const { name, brand, alcoholContent, price, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    pints: pints,
    id: id
  }
}

export const buyItem = (id) => ({
  type: c.BUY_ITEM,
  id: id
});

export const selectKeg = (keg) => {
  const { name, brand, alcoholContent, price, pints, id } = keg;
  return {
    type: c.SELECT_KEG,
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    pints: pints,
    id: id
  }
}

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});
