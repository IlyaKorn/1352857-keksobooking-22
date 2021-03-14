'use strict';

import {returnMainMarkerPosition} from './map.js';
import {pullDataServer} from './server.js';
import {resetAddressCoordinates} from './map.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const typeBuilding = document.querySelector('#type');
const cellPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const promoBlock = document.querySelector('.promo');
const successTemplate = document.querySelector('#success').content;
const success = successTemplate.querySelector('.success');
const successBlock = success.cloneNode(true);
const errorTemplate = document.querySelector('#error').content;
const errorMessage = errorTemplate.querySelector('.error');
const error = errorMessage.cloneNode('true');
const buttonClose = error.querySelector('.error__button');
const clearButton = document.querySelector('.ad-form__reset');
const fileChoser = document.querySelector('#avatar');
const avatarBlock = document.querySelector('.ad-form-header__preview');
const previewAvatar = avatarBlock.querySelector('img');
const fileChoserHousing = document.querySelector('#images');
const previewPhotoHousing = document.querySelector('.ad-form__photo');

const minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const onTypeBuldingChange = function() {
  const price = minPrice[this.value];
  cellPrice.setAttribute('min', price);
  cellPrice.setAttribute('placeholder', price)
};

const onTimeInChange = () => {
  timeOut.selectedIndex = timeIn.selectedIndex;
};

const onTimeOutChange = () => {
  timeIn.selectedIndex = timeOut.selectedIndex;
};

typeBuilding.addEventListener('change', onTypeBuldingChange);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

const onCloseModalMessageClick = (element) => {
  document.addEventListener('click', () => {
    removeMessageElement(element);
  });
};

const removeMessageElement = (element) => {
  element.remove();
};

const onCloseModalMessage = (element) => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      removeMessageElement(element);
    }
  });
};

const showMessageResult = (element) => {
  promoBlock.insertAdjacentElement('beforebegin', element);
  onCloseModalMessage(element);
  onCloseModalMessageClick(element);
  return element;
};

const onCloseButtonErrorMessage = () => {
  buttonClose.addEventListener('click', () => {
    removeMessageElement(error);
  });
};

clearButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  returnMainMarkerPosition();
  resetAddressCoordinates();
  updateAvatarImage();
  updatePhotoHousing();
});

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw Error('Произошла ошибка при отправке данных на сервер');
  }
};

fileChoser.addEventListener('change', () => {
  const file = fileChoser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewAvatar.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

fileChoserHousing.addEventListener('change', () => {
  const imageItem = new Image(70, 70);
  imageItem.setAttribute('alt', 'Фотография жилья');
  previewPhotoHousing.appendChild(imageItem);

  const file = fileChoserHousing.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imageItem.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
  fileChoserHousing.setAttribute('disabled', 'disabled');
});

const updateAvatarImage = () => previewAvatar.src = 'img/muffin-grey.svg';

const updatePhotoHousing = () => {
  previewPhotoHousing.innerHTML = '';
  fileChoserHousing.removeAttribute('disabled');
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  pullDataServer(formData)
    .then(checkStatus)
    .then(() => adForm.reset())
    .then(() => returnMainMarkerPosition())
    .then(updateAvatarImage)
    .then(updatePhotoHousing)
    .then(() => showMessageResult(successBlock))
    .catch(() => {
      showMessageResult(error)
      onCloseButtonErrorMessage()
    })
});
