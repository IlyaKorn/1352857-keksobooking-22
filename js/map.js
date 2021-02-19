//import L from 'leaflet';
/* global L:readonly */
import {getCardsArray} from './data.js';
import {getPopUp} from './popup.js';
import {activateForm} from './util.js';

const TOKYO_COORDINATE_X = 35.40480;
const TOKYO_COORDINATE_Y = 139.45360;
const tabAddressCoordinates = document.querySelector('#address');
const FINAL_ARRAY_ELEMENTS = 10;
const adsData = getCardsArray(FINAL_ARRAY_ELEMENTS);

tabAddressCoordinates.value = TOKYO_COORDINATE_X.toFixed(5) + ', ' + TOKYO_COORDINATE_Y.toFixed(5);
tabAddressCoordinates.setAttribute('readonly', 'readonly');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm()
  })
  .setView({
    lat: 35.40480,
    lng: 139.45360,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.40480,
    lng: 139.45360,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  tabAddressCoordinates.value = (evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5));
});

const drawMapElements = () => {
  const secondaryPinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [46, 46],
    iconAnchor: [23, 46],
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

