const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  if (max <= min || min < 0) {
    return null;
  }

  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomNumber(1, 5);

const getRandomFloatNumber = (min, max, afterPoint) => {
  if (max <= min || min < 0) {
    return null;
  }

  return Number(Math.abs(Math.random() * (max - min) + min).toFixed(afterPoint));
};

getRandomFloatNumber(3, 6, 2);


//ДЗ по 3 лекции

//import _ from 'lodash';
const COORDINATES_FROMX = 35.65000;
const COORDINATES_BEFOREX = 35.70000;
const COORDINATES_FROMY = 139.70000;
const COORDINATES_BEFOREY = 139.80000;
const COORDINATES_AFTERPOINT = 5;
const FINAL_ARRAY_ELEMENTS = 10;

const typePremises = ['palace', 'flat', 'house', 'bungalow'];
const elementsEntryDeparture = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const listPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
  };
};

const getRandomElement = (elementsArray) => {
  return _.sample([elementsArray]);
};

const getRandomElementsArray = (randomElementsList) => {
  const quantityElements = _.random(1, randomElementsList.length);
  return _.sampleSize(randomElementsList, quantityElements);
};

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

const Card = function () {
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
getCardsArray(FINAL_ARRAY_ELEMENTS);
