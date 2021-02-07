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

import _ from 'lodash';
const typePremises = ['palace', 'flat', 'house', 'bungalow'];
const timeCheckinCheckout = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photoGallery = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createAuthor = () => {
  const imageName = 'img/avatars/user' + '0' + getRandomNumber(1, 8) + '.png';
  return {
    avatar: imageName,
  };
};

const getInfoAd = () => {
  const coordinates = getRandomFloatNumber(1, 100, 2);
  const randomPrice = _.random(1, 1000000);
  const randomIndex = _.random(0, typePremises.length - 1);
  const randomRooms = _.random(1, 30);
  const randomGuests = _.random(1, 30);
  const randomIndexTime = _.random(0, timeCheckinCheckout.length - 1);

  const getRandomElementsArray = (nameArray) => {
    const quantityElements = _.random(1, 6);
    return _.sampleSize(nameArray, quantityElements);
  }

  return {
    title: 'Aviable offer',
    address: coordinates + ', ' + coordinates,
    price: randomPrice,
    type: typePremises[randomIndex],
    rooms: randomRooms,
    guests: randomGuests,
    checkin: timeCheckinCheckout[randomIndexTime],
    checkout: timeCheckinCheckout[randomIndexTime],
    features: getRandomElementsArray(facilities),
    description: 'This is a very cozy place for your overnight stay. Here you can have a great rest and make a plan for tomorrow: "Where are we going next?"',
    photos: getRandomElementsArray(photoGallery),
  };
};

const getCoordinates = () => {
  return {
    x: getRandomFloatNumber(35.65000, 35.70000, 5),
    y: getRandomFloatNumber(139.70000, 139.80000, 5),
  };
};

const Card = function () {
  this.author = createAuthor();
  this.offer = getInfoAd();
  this.location = getCoordinates();
};

const cardsArray = () => {
  new Array(10).fill(null).map(() => new Card());
  return cardsArray();
}
cardsArray();



