'use strict'

import _ from 'lodash';

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  if (max <= min || min < 0) {
    return null;
  }

  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
};

const getRandomFloatNumber = (min, max, afterPoint) => {
  if (max <= min || min < 0) {
    return null;
  }

  return Number(Math.abs(Math.random() * (max - min) + min).toFixed(afterPoint));
};

const getRandomElementsArray = (randomElementsList) => {
  const quantityElements = _.random(1, randomElementsList.length);
  return _.sampleSize(randomElementsList, quantityElements);
};

const getRandomElement = (elementsArray) => {
  return _.sample(elementsArray);
};

export {getRandomElement};
export {getRandomElementsArray};
export {getRandomNumber};
export {getRandomFloatNumber};
