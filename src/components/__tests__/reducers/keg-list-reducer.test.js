import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const sampleState = {
  [1]: {
    name: "blargbeer",
    brand: "berts",
    alcoholContent: 7,
    price: 4,
    pints: 40,
    id: "1"
  },
  [2]: {
    name: "sdfdsf",
    brand: "sdfdsf",
    alcoholContent: 3,
    price: 2,
    pints: 43,
    id: "2"
  }
}

  const sampleKeg = {
    name: "sadad",
    brand: "sdddd",
    alcoholContent: 33,
    price: 22,
    pints: 9,
    id: "3"

  }

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, alcoholContent, price, pints, id} = sampleKeg;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      pints: pints,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        pints: pints,
        id: id
      }
    });
  });

  test('Should remove one pint from selected keg w/ id', () => {
    const action = {
      type: 'BUY_ITEM',
      id: 1
    };

    const newState = {
    [1]: {
      name: "blargbeer",
      brand: "berts",
      alcoholContent: 7,
      price: 4,
      pints: 39,
      id: "1"
    },
    [2]: {
      name: "sdfdsf",
      brand: "sdfdsf",
      alcoholContent: 3,
      price: 2,
      pints: 43,
      id: "2"
    }
  };
    
    expect(kegListReducer(sampleState, action)).toEqual(newState);
  });


})