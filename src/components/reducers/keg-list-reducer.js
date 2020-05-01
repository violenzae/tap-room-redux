export default (state = {}, action) => {
  const { name, brand, alcoholContent, price, pints, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
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
  case 'BUY_ITEM':
      const newPint = (state[id].pints -= 1);
      const newState = {...state, [id]: {...state[id], pints: newPint}};
      return newState;
  default:
    return state;
  }
};