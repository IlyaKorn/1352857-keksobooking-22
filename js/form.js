'use strict';
import {returnMainMarkerPosition} from './map.js';

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

// Обработчики события "Время заезда и выезда"
typeBuilding.addEventListener('change', onTypeBuldingChange);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

// Закрытие окна по успешной отправке при использовании клика на произвольную область
const onCloseModalMessageClickk = (element) => {
  document.addEventListener('click', () => {
    removeMessageElement(element);
  });
};
// Функция удаления элемента из DOM
const removeMessageElement = (element) => {
  element.remove();
};
//Закрытие окна по успешной отправке при нажатии на 'ESC'
const onCloseModalMessage = (element) => {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      removeMessageElement(element);
    }
  });
};
// Показ сообщения при успешной отправки формы, а также вызов функции с обработчиками по закрытию
const showSuccessfulMessage = (element) => {
  promoBlock.insertAdjacentElement('beforebegin', element);
  onCloseModalMessage(successBlock);
  onCloseModalMessageClickk(successBlock);
  return element;
};

//Обработчик события по закртию окна с ошибкой по нажатию на кнопку закрытия
const onCloseButtonErrorMesage = () => {
  buttonClose.addEventListener('click', () => {
    removeMessageElement(error);
  });
};

//Показ окна если при отправке возникла ошибка, а также вызов функции с обработчиками по его закрытию
const showErrorMessage = (element) => {
  promoBlock.insertAdjacentElement('beforebegin', element);
  onCloseModalMessage(error);
  onCloseModalMessageClickk(error);
  onCloseButtonErrorMesage();
  return element;
};

//Сброс формы по нажатию кнопки "Очистить"

clearButton.addEventListener('click', () => {
  adForm.reset();
  returnMainMarkerPosition();
});

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    showErrorMessage(error);
    throw Error('Произошла ошибка при отправке данных на сервер');
  }
};

// Отправка формы
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then(checkStatus)
    .then(() => adForm.reset())
    .then(() => returnMainMarkerPosition())
    .then(() => showSuccessfulMessage(successBlock))
});
