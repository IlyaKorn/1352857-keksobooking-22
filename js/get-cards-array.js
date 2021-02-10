import {Card} from './Card.js';

const getCardsArray = (quantityElements) => {
  return new Array(quantityElements).fill(null).map(() => new Card());
};

export {getCardsArray};
