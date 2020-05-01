export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
const { name, brand, alcoholContent, price, pints, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    pints: pints,
    id: id
  }
}

export const buyItem = (id) => ({
  type: 'BUY_ITEM',
  id: id
});

export const selectKeg = (keg) => {
  const { name, brand, alcoholContent, price, pints, id } = keg;
  return {
    type: 'SELECT_KEG',
    name: name,
    brand: brand,
    alcoholContent: alcoholContent,
    price: price,
    pints: pints,
    id: id
  }
}

export const deselectKeg = () => ({
  type: 'DESELECT_KEG'
});
