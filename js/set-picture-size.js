const STEP = 25;
const MIN_PICTURE_SIZE = 25;
const MAX_PICTURE_SIZE = 100;
const DEFAULT_PICTURE_SIZE = 100;

const smallerZoomButton = document.querySelector('.scale__control--smaller');
const biggerZoomButton = document.querySelector('.scale__control--bigger');
const zoomValue = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');

zoomValue.value = `${DEFAULT_PICTURE_SIZE }%`;

const getZoomValue = () => {
  const zoomInputValue = +parseInt(zoomValue.value, 10);
  return zoomInputValue;
};

const checkMinValue = (value) => {
  if (value < MIN_PICTURE_SIZE) {
    return MIN_PICTURE_SIZE;
  }
  return value;
};

const checkMaxValue = (value) => {
  if (value > MAX_PICTURE_SIZE) {
    return MAX_PICTURE_SIZE;
  }
  return value;
};

const changePictureSize = () => {
  const nowZoomValue = getZoomValue();
  picture.style.transform = `scale(${ nowZoomValue / 100 })`;
};

const enlargeZoomValue = () => {
  const nowZoomValue = getZoomValue();
  const newZoomValue = nowZoomValue - STEP;
  const newCheckedZoomValue = checkMinValue(newZoomValue);
  zoomValue.value = `${newCheckedZoomValue }%`;
  changePictureSize();
};

const reduceZoomValue = () => {
  const nowZoomValue = getZoomValue();
  const newZoomValue = nowZoomValue + STEP;
  const newCheckedZoomValue = checkMaxValue(newZoomValue);
  zoomValue.value = `${newCheckedZoomValue }%`;
  changePictureSize();
};

smallerZoomButton.addEventListener('click', enlargeZoomValue);

biggerZoomButton.addEventListener('click', reduceZoomValue);
