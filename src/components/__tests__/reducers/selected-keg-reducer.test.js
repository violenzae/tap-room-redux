import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  let action;

  // const sampleState = {
  //   [1]: {
  //     name: "blargbeer",
  //     brand: "berts",
  //     alcoholContent: 7,
  //     price: 4,
  //     pints: 40,
  //     id: "1"
  //   },
  //   [2]: {
  //     name: "sdfdsf",
  //     brand: "sdfdsf",
  //     alcoholContent: 3,
  //     price: 2,
  //     pints: 43,
  //     id: "2"
  //   }
  // }

    test('Should return default state if no action type is recognized', () => {
      expect(selectedKegReducer(null, { type: null })).toEqual(null);
    });
});