const templateFragment = document.querySelector('#card').content;
const mapCanvas = document.querySelector('.map__canvas');

const getTypePalace = (typeHousing) => {
  switch (typeHousing) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    default:
      return '';
  }
};

const getTextCase = (number, one, two, five) => {
  number %= 100;
  if (number >= 5 && number <= 20) {
    return five;
  }
  number %= 10;
  if (number === 1) {
    return one;
  }
  if (number >= 2 && number <= 4) {
    return two;
  }
  return five;
};

const createFutureElement = (listElemenstFeatures) => {
  const fragment = document.createDocumentFragment();
  listElemenstFeatures.forEach(function(currentValue) {
    const listElement = document.createElement('li');
    listElement.className = `popup__feature popup__feature--${currentValue}`;
    fragment.appendChild(listElement);
  })
  return fragment
};

const createPhotoElement = (listPhotos) => {
  const fragment = document.createDocumentFragment();
  listPhotos.forEach(function(currentValue) {
    const photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.src = (currentValue);
    photoElement.width = 45;
    photoElement.height = 40;
    fragment.appendChild(photoElement);
  })
  return fragment
};


const getPopUp = (cardData) => {
  const template = templateFragment.querySelector('.popup');
  const elementAds = template.cloneNode(true);
  elementAds.querySelector('.popup__title').textContent = cardData.offer.title;
  elementAds.querySelector('.popup__text--address').textContent = cardData.offer.address;
  elementAds.querySelector('.popup__text--price').textContent = cardData.offer.price + ' ₽/ночь';
  elementAds.querySelector('.popup__type').textContent = getTypePalace(cardData.offer.type);
  elementAds.querySelector('.popup__text--capacity').textContent = cardData.offer.rooms + ' ' + getTextCase(cardData.offer.rooms, 'комнат', 'комнаты', 'комнат') + ' для ' + cardData.offer.guests + ' ' + getTextCase(cardData.offer.guests, 'гостя', 'гостей', 'гостей');
  elementAds.querySelector('.popup__text--time').textContent = 'Заезд после ' + cardData.offer.checkin + ', выезд до ' + cardData.offer.checkout;
  elementAds.querySelector('.popup__features').innerHTML = '';
  elementAds.querySelector('.popup__features').appendChild(createFutureElement(cardData.offer.features));
  elementAds.querySelector('.popup__description').textContent = cardData.offer.description;
  elementAds.querySelector('.popup__avatar').src = cardData.author.avatar;
  elementAds.querySelector('.popup__photos').innerHTML = '';
  elementAds.querySelector('.popup__photos').appendChild(createPhotoElement(cardData.offer.photos));
  mapCanvas.appendChild(elementAds);
};

export {getPopUp};
