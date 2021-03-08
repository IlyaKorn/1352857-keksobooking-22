'use strict';

/* global _:readonly */

import {drawMapElements}  from './map.js';
import {removeMarkers} from './map.js';

const DELAY_TIMER = 500;

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

const PriceLength = {
  LOW: {
    MIN: 0,
    MAX: 10000,
  },
  MIDDLE: {
    MIN: 10000,
    MAX: 50000,
  },
  HIGH: {
    MIN: 50000,
    MAX: Infinity,
  },
};

// Шаблон фильтрации форм
const filteringItem = (element, property, meaning) => {
  if (property.value === 'any') {
    return true;
  }
  return element.offer[meaning].toString() === property.value;
};

// Функция фильтрация жилья
const filteringType = (element) => {
  return filteringItem(element, housingType, 'type');
};

// Фильтрация формы цены
const filteringItemPrice = (element) => {
  const filteringPrice = PriceLength[housingPrice.value.toUpperCase()];
  if (housingPrice.value === 'any') {
    return true
  }
  return element.offer.price >= filteringPrice.MIN && element.offer.price <= filteringPrice.MAX;
};

// Фильтрация  формы комнат
const filteringRooms = (element) => {
  return filteringItem(element, housingRooms, 'rooms');
};

// Фильтрация формы гостей
const filteringGuests = (element) => {
  return filteringItem(element, housingGuests, 'guests');
};

//Фильтрация удобств
const filteringFeatures = (element) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');
  return Array.from(checkedFeatures).every((item) => {
    return element.offer.features.includes(item.value);
  });
};

// Фильтрация формы по объявлениям
const filteringAds = (housingElements) => {
  mapFilters.addEventListener('change', _.debounce(() => {
    const sameTypeHousing = housingElements.filter(filteringType)
      .filter(filteringItemPrice)
      .filter(filteringRooms)
      .filter(filteringGuests)
      .filter(filteringFeatures);
    removeMarkers();
    drawMapElements(sameTypeHousing);
  }, DELAY_TIMER));
};
export {filteringAds};

