//import L from 'leaflet';
/* global L:readonly */
import {getCardsArray} from './data.js';
import {getPopUp} from './popup.js';


const CITY_COORDINATE_X = 35.40480;
const CITY_COORDINATE_Y = 139.45360;
const FINAL_ARRAY_ELEMENTS = 10;
const MAIN_ICON_SIZE_WIDTH = 52;
const MAIN_ICON_SIZE_HEIGHT = 52;
const MAIN_ICON_ANCHOR_SIZE_WIDTH = 26;
const MAIN_ICON_ANCHOR_SIZE_HEIGHT = 52;
const MAIN_MARKER_DEFAULT_COORDINATE_X = 35.40480;
const MAIN_MARKER_DEFAULT_COORDINATE_Y = 139.45360;
const SECONDARY_ICON_SIZE_WIDTH = 46;
const SECONDARY_ICON_SIZE_HEIGHT = 46;
const SECONDARY_ICON_ANCHOR_SIZE_WIDTH = 23;
const SECONDARY_ICON_ANCHOR_SIZE_HEIGHT = 46;
const tabAddressCoordinates = document.querySelector('#address');
const adForm = document.querySelector('.ad-form');
const adFormFieldSet = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('.map__filter');
const mapFiltersFieldSetFeatures = mapFilters.querySelector('.map__features');
const loadingAvatar = document.querySelector('#avatar');
const adsData = getCardsArray(FINAL_ARRAY_ELEMENTS);

tabAddressCoordinates.value = CITY_COORDINATE_X.toFixed(5) + ', ' + CITY_COORDINATE_Y.toFixed(5);
tabAddressCoordinates.setAttribute('readonly', 'readonly');

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersFieldSetFeatures.setAttribute('disabled', 'disabled');
  loadingAvatar.setAttribute('disabled', 'disabled');

  for (const value of adFormFieldSet) {
    value.setAttribute('disabled', 'disabled');
  }

  for (const value of mapFiltersSelect) {
    value.setAttribute('disabled', 'disabled');
  }
};

disablePage();

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersFieldSetFeatures.removeAttribute('disabled');
  for (const value of  adFormFieldSet) {
    value.removeAttribute('disabled');
  }

  for (const value of mapFiltersSelect) {
    value.removeAttribute('disabled');
  }
};

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView({
    lat: CITY_COORDINATE_X,
    lng: CITY_COORDINATE_Y,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_ICON_SIZE_WIDTH, MAIN_ICON_SIZE_HEIGHT],
  iconAnchor: [MAIN_ICON_ANCHOR_SIZE_WIDTH, MAIN_ICON_ANCHOR_SIZE_HEIGHT],
});

const mainPinMarker = L.marker(
  {
    lat: MAIN_MARKER_DEFAULT_COORDINATE_X,
    lng: MAIN_MARKER_DEFAULT_COORDINATE_Y ,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('move', (evt) => {
  tabAddressCoordinates.value = (evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5));
});

const drawMapElements = () => {
  const secondaryPinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [SECONDARY_ICON_SIZE_WIDTH, SECONDARY_ICON_SIZE_HEIGHT],
    iconAnchor: [SECONDARY_ICON_ANCHOR_SIZE_WIDTH, SECONDARY_ICON_ANCHOR_SIZE_HEIGHT],
  });
  adsData.forEach(function(ad) {
    const secondaryPinMarker = L.marker(
      {
        lat: ad.location.x,
        lng: ad.location.y,
      },
      {
        icon: secondaryPinIcon,
      },
    );
    secondaryPinMarker.addTo(map);
    secondaryPinMarker.bindPopup(getPopUp(ad));
  });
};

drawMapElements();

