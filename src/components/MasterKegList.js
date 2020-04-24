import {v4} from 'uuid';

const masterKegList = [
  {
    name: "lame sauce",
    brand: "creep factory",
    price: 10,
    alcoholContent: 12,
    pints: 50,
    id: v4()
  },
  {
    name: "swamp juice",
    brand: "boppleton",
    price: 7,
    alcoholContent: 10,
    pints: 100,
    id: v4()
  },
  {
    name: "the goat",
    brand: "donk city",
    price: 12,
    alcoholContent: 20,
    pints: 90,
    id: v4()
  },
  {
    name: "nevermind",
    brand: "you know who",
    price: 6,
    alcoholContent: 8,
    pints: 2,
    id: v4()
  }, 
]

export default masterKegList;