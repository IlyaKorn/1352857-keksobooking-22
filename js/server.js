import {drawMapElements} from './map.js';
const checkServerStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const {statusText, status} = response;
    throw new Error (`${status} - ${statusText}`);
  }
};

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then(checkServerStatus)
  .then((response) => response.json())
  .then(drawMapElements)
  .catch((error) => console.log(error));




