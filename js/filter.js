'use strict';

import {drawMapElements}  from './map.js';
import {removeMarkers} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');

// Фильтрация элемента формы по значению
const filteringItem = (element) => {
  if (housingType.value === 'any') {
    return true;
  }
  return element.offer.type === housingType.value;
};

// Фильтр Типа жилья
const filteringAds = (housingElements) => {
  mapFilters.addEventListener('change', () => {
    const sameTypeHousing = housingElements.filter(filteringItem);
    removeMarkers();
    drawMapElements(sameTypeHousing);
  });
};
export {filteringAds};

