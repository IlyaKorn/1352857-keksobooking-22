'use strict';

import _ from 'lodash';
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

const filteringItem = (element, property, meaning) => {
  if (property.value === 'any') {
    return true;
  }
  return element.offer[meaning].toString() === property.value;
};

const filteringItemsHousing = (element) => {
  return filteringItem(element, housingType, 'type') && filteringItem(element, housingRooms, 'rooms') && filteringItem(element, housingGuests, 'guests');
};

const filteringItemPrice = (element) => {
  const filteringPrice = PriceLength[housingPrice.value.toUpperCase()];
  if (housingPrice.value === 'any') {
    return true
  }
  return element.offer.price >= filteringPrice.MIN && element.offer.price <= filteringPrice.MAX;
};

const filteringFeatures = (element) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');
  return Array.from(checkedFeatures).every((item) => {
    return element.offer.features.includes(item.value);
  });
};

const filteringAds = (housingElements) => {
  mapFilters.addEventListener('change', _.debounce(() => {
    const sameTypeHousing = housingElements.filter(filteringItemsHousing)
      .filter(filteringItemPrice)
      .filter(filteringFeatures);
    removeMarkers();
    drawMapElements(sameTypeHousing);
  }, DELAY_TIMER));
};
export {filteringAds};

