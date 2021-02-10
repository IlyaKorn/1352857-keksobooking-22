//import _ from ('lodash');
const getRandomElementsArray = (randomElementsList) => {
  const quantityElements = _.random(1, randomElementsList.length);
  return _.sampleSize(randomElementsList, quantityElements);
};

export {getRandomElementsArray};
