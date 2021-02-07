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
const typePremises = ['palace', 'flat', 'house', 'bungalow'];
const timeCheckinCheckout = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photoGallery = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const coordinatesFromX = 35.65000;
const coordinatesBeforeX = 35.70000;
const coordinatesFromY = 139.70000;
const coordinatesBeforeY = 139.80000;
const coordinatesAfterPoint = 5;
const finalArrayElements = 10;

const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
  };
};

const getRandomElement = (elementsArray) => {
  return _.sample([elementsArray]);
};


const getCoordinates = () => {
  return {
    x: getRandomFloatNumber(coordinatesFromX, coordinatesBeforeX, coordinatesAfterPoint),
    y: getRandomFloatNumber(coordinatesFromY, coordinatesBeforeY, coordinatesAfterPoint),
  };
};

const getInfoAd = () => {
  const getRandomElementsArray = (randomList) => {
    const quantityElements = _.random(1, randomList.length - 1);
    return _.sampleSize(randomList, quantityElements);
  }

  return {
    title: 'Aviable offer',
    address: getCoordinates(),
    price: _.random(1, 1000000),
    type: getRandomElement(typePremises),
    rooms: _.random(1, 30),
    guests: _.random(1, 30),
    checkin: timeCheckinCheckout[_.random(0, timeCheckinCheckout.length - 1)],
    checkout: timeCheckinCheckout[_.random(0, timeCheckinCheckout.length - 1)],
    features: getRandomElementsArray(facilities),
    description: 'This is a very cozy place for your overnight stay. Here you can have a great rest and make a plan for tomorrow: "Where are we going next?"',
    photos: getRandomElementsArray(photoGallery),
  };
};

const Card = function () {
  this.author = createAuthor();
  this.offer = getInfoAd();
  this.location = getCoordinates();
};

const getCardsArray = () => {
  return new Array(finalArrayElements).fill(null).map(() => new Card());
};
getCardsArray();



