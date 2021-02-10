import {getRandomNumber} from './util.js';
const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
  };
};

export {createAuthor};
