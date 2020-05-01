import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const sampleKeg = {
    name: "blargbeer",
    brand: "berts",
    alcoholContent: 7,
    price: 4,
    pints: 40,
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

})