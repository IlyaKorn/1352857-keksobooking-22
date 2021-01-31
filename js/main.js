const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  if (max <= min) {
    return alert('Минимальное значение должно быть меньше максимального');
  }

  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min);
};

getRandomNumber(1, 5);

const getRandomFloatNumber = (min, max, afterPoint) => {
  if (max <= min) {
    return alert('Минимальное значение должно быть меньше максимального');
  }

  return Math.abs(Math.random() * (max - min) + min).toFixed(afterPoint);
};

getRandomFloatNumber(3, 6, 2);
