'use strict';

import {drawMapElements}  from './map.js';
import {removeMarkers} from './map.js';
import {clostBallong} from './map.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');


// Фильтр Типа жилья
const filterOutHousingTypes = (housingElements) => {
  housingType.addEventListener('change', () => {
    if (housingType.value === 'any') {
      drawMapElements(housingElements);
      clostBallong();
    } else {
      const sameTypeHousing = housingElements.filter(element => element.offer.type === housingType.value);
      removeMarkers();
      drawMapElements(sameTypeHousing);
    }
  });
};

export{filterOutHousingTypes};
