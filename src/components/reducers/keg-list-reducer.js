export default (state = {}, action) => {
  const { name, brand, alcoholContent, price, pints, id } = action;
  switch (action.type) {
  case 'ADD_KREG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pints: pints,
        id: id
      }
    });
  default:
    return state;
  }
};