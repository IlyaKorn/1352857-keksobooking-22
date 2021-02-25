//import _ from ('lodash');
/* global _:readonly */
import {getRandomElement} from './util.js';
import {getRandomElementsArray} from './util.js'
import {getRandomNumber} from './util.js';
import {getRandomFloatNumber} from './util.js';

/*const typePremises = ['palace', 'flat', 'house', 'bungalow'];
const elementsEntryDeparture = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const listPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const COORDINATES_FROMX = 35.30480;
const COORDINATES_BEFOREX = 35.46529;
const COORDINATES_FROMY = 139.36060;
const COORDINATES_BEFOREY = 139.55809;
const COORDINATES_AFTERPOINT = 5;

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

const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
  };
};
*/

/*const Card = function () {
  const coordinateX = getRandomFloatNumber(COORDINATES_FROMX, COORDINATES_BEFOREX, COORDINATES_AFTERPOINT);
  const coordinateY = getRandomFloatNumber(COORDINATES_FROMY, COORDINATES_BEFOREY, COORDINATES_AFTERPOINT);
  this.author = createAuthor();
  this.offer = getInfoAd(coordinateX, coordinateY);
  this.location = {
    x: coordinateX,
    y: coordinateY,
  };
};

const getCardsArray = (quantityElements) => {
  return new Array(quantityElements).fill(null).map(() => new Card());
};

export {createAuthor};
export {getCardsArray};
export {getInfoAd};
export {Card};
*/
