//import _ from ('lodash');
/* global _:readonly */
const adForm = document.querySelector('.ad-form');
const adFormFieldSet = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('.map__filter');
const mapFiltersFieldSetFeatures = mapFilters.querySelector('.map__features');

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

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFieldSetFeatures.setAttribute('disabled', 'disabled');

  for (let i = 0; i < adFormFieldSet.length; i ++) {
    adFormFieldSet[i].setAttribute('disabled', 'disabled');
  }

  for (let j = 0; j < mapFiltersSelect.length; j++) {
    mapFiltersSelect[j].setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersFieldSetFeatures.removeAttribute('disabled');
  for (let i = 0; i < adFormFieldSet.length; i ++) {
    adFormFieldSet[i].removeAttribute('disabled');
  }

  for (let j = 0; j < mapFiltersSelect.length; j++) {
    mapFiltersSelect[j].removeAttribute('disabled');
  }
};

disableForm();

export {getRandomElement};
export {getRandomElementsArray};
export {getRandomNumber};
export {getRandomFloatNumber};
export {disableForm};
export {activateForm};
