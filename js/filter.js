'use strict';

import {drawMapElements}  from './map.js';
import {removeMarkers} from './map.js';
import {closeBallong} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

// Фильтр Типа жилья
const filterOutHousingTypes = (housingElements) => {
  housingType.addEventListener('change', () => {
    if (housingType.value === 'any') {
      drawMapElements(housingElements);
      closeBallong();
    } else {
      const sameTypeHousing = housingElements.filter(element => element.offer.type === housingType.value);
      removeMarkers();
      drawMapElements(sameTypeHousing);
    }
  });
};

export{filterOutHousingTypes};
