//import _ from ('lodash');
import {getRandomElement} from './get-random-element.js';
import {getRandomElementsArray} from './get-random-elements-array.js'

const typePremises = ['palace', 'flat', 'house', 'bungalow'];
const elementsEntryDeparture = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const listPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const getInfoAd = (coordinatesAxisX, coordinatesAxisY) => {
  return {
    title: 'Aviable offer',
    address: 'x: ' + coordinatesAxisX + ', ' + 'y: ' + coordinatesAxisY,
    price: _.random(1, 1000000),
    type: getRandomElement(typePremises),
    rooms: _.random(1, 30),
    guests: _.random(1, 30),
    checkin: getRandomElement(elementsEntryDeparture),
    checkout: getRandomElement(elementsEntryDeparture),
    features: getRandomElementsArray(facilities),
    description: 'This is a very cozy place for your overnight stay. Here you can have a great rest and make a plan for tomorrow: "Where are we going next?"',
    photos: getRandomElementsArray(listPhotos),
  };
};

export {getInfoAd};
