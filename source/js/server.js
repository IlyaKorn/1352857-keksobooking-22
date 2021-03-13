'use strict';

import {drawMapElements} from './map.js';
import {filteringAds} from './filter.js';

const SERVER_DATA = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_POST = 'https://22.javascript.pages.academy/keksobooking';

const displayErrorMessage = () => {
  const promo = document.querySelector('.promo');
  const divError = document.createElement('div');
  divError.innerHTML = 'Объявления на карте не загружены. Попробуйте обновить страницу';
  divError.style.fontWeight - 'bold';
  divError.style.opacity = '0.4';
  divError.style.fontSize = 'smaller';
  divError.style.paddingTop = '15px';
  divError.style.paddingBottom = '15px';
  divError.style.marginBottom = '10px';
  divError.style.color = 'white';
  divError.style.backgroundColor = 'red';
  divError.style.textAlign = 'center';
  divError.style.textTransform = 'uppercase';
  divError.style.position = 'fixed';
  divError.style.left = 'center';
  divError.style.zIndex = '450';
  divError.style.top = '0px';
  divError.style.width = '1200px';
  divError.style.marginBottom = '100px';
  promo.insertAdjacentElement('beforebegin', divError);
  setTimeout(() => {
    divError.remove()
  }, 3000)
};

const checkServerStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    displayErrorMessage();
    const {statusText, status} = response;
    throw new Error (`${status} - ${statusText}`);
  }
};

fetch(SERVER_DATA)
  .then(checkServerStatus)
  .then((response) => response.json())
  .then(drawMapElements)
  .then(filteringAds)
  .catch((error) => (error));

const pullDataServer = (formData) => {
  return fetch(SERVER_POST,
    {
      method: 'POST',
      body: formData,
    })
};
export {pullDataServer};
