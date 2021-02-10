import {createAuthor} from './data.js'
import {getInfoAd} from './data.js'
import {getRandomFloatNumber} from './util.js'

const COORDINATES_FROMX = 35.65000;
const COORDINATES_BEFOREX = 35.70000;
const COORDINATES_FROMY = 139.70000;
const COORDINATES_BEFOREY = 139.80000;
const COORDINATES_AFTERPOINT = 5;

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

export {Card};
