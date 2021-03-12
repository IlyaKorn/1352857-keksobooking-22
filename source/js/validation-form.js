const quantityRoomsForm = document.querySelector('#room_number');
const quantityGuestsPlaceForm = document.querySelector('#capacity');
const quantityGuestValues = quantityGuestsPlaceForm.children;


const disablePlaceForm = function (listElements) {
  for (let currentValue of listElements) {
    currentValue.setAttribute('disabled', 'disabled');
  }
};

const checkRoomsPlaceForm = function () {
  disablePlaceForm(quantityGuestValues);
  if (this.value === '1') {
    quantityGuestsPlaceForm.options[2].removeAttribute('disabled');
    quantityGuestsPlaceForm.value = '1';
  } else if (this.value === '2') {
    quantityGuestsPlaceForm.options[1].removeAttribute('disabled');
    quantityGuestsPlaceForm.options[2].removeAttribute('disabled');
    if (quantityGuestsPlaceForm.value === '0' || quantityGuestsPlaceForm.value === '3') {
      quantityGuestsPlaceForm.value = '2';
    }
  } else if (this.value === '3') {
    quantityGuestsPlaceForm.options[0].removeAttribute('disabled');
    quantityGuestsPlaceForm.options[1].removeAttribute('disabled');
    quantityGuestsPlaceForm.options[2].removeAttribute('disabled');
    if (quantityGuestsPlaceForm.value === '0') {
      quantityGuestsPlaceForm.value = '3';
    }
  } else if (this.value === '100') {
    quantityGuestsPlaceForm.options[3].removeAttribute('disabled');
    quantityGuestsPlaceForm.value = '0';
  }
};


quantityRoomsForm.addEventListener('change', checkRoomsPlaceForm);

