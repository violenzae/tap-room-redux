import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  let action;

  const thisKeg = {
      name: "blargbeer",
      brand: "berts",
      alcoholContent: 7,
      price: 4,
      pints: 40,
      id: "1"
   }

    test('Should return default state if no action type is recognized', () => {
      expect(selectedKegReducer(null, { type: null })).toEqual(null);
    });

    test('should return the selected keg', () => {
      const action = {
        type: 'SELECT_KEG',
        name: "blargbeer",
        brand: "berts",
        alcoholContent: 7,
        price: 4,
        pints: 40,
        id: "1"

      }

      expect(selectedKegReducer(null, action)).toEqual(thisKeg);
    });

    test('should change keg back to null', () => {
      const action = {
        type: 'DESELECT_KEG',
      }

      expect(selectedKegReducer(thisKeg, action)).toEqual(null);
    });

});