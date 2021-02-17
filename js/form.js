const typeBuilding = document.querySelector('#type');
const cellPrice = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const minPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

cellPrice.setAttribute('placeholder', 1000);

typeBuilding.onchange = function() {
  const price = minPrice[this.value];
  cellPrice.setAttribute('min', price);
  cellPrice.setAttribute('placeholder', price)
};

timeIn.onchange = function() {
  timeOut.selectedIndex = timeIn.selectedIndex;
};
timeOut.onchange = function() {
  timeIn.selectedIndex = timeOut.selectedIndex;
};
