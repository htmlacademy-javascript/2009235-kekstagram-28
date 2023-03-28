import {isEscapeKey} from './utils.js';

const newLoadPictureErrorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const newLoadPictureSuccessTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeLoadPictureMessage();
  }
};

const onCloseButton = (evt) => {
  evt.preventDefault();
  closeLoadPictureMessage();
};

const onOutsideModalWindow = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeLoadPictureMessage();
  }
};


function openLoadPictureMessageError () {
  document.body.prepend(newLoadPictureErrorTemplate);
  const errorModalWindow = document.querySelector('.error');
  const errorCloseButton = errorModalWindow.querySelector('.error__button');

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  errorCloseButton.addEventListener('click', onCloseButton);
  errorModalWindow.addEventListener('click', onOutsideModalWindow);
}


function openLoadPictureMessageSuccess () {
  document.body.prepend(newLoadPictureSuccessTemplate);
  const successModalWindow = document.querySelector('.success');
  const successCloseButton = successModalWindow.querySelector('.success__button');

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  successCloseButton.addEventListener('click', onCloseButton);
  successModalWindow.addEventListener('click', onOutsideModalWindow);
}


function closeLoadPictureMessage () {
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  const errorModalWindow = document.querySelector('.error');
  const successModalWindow = document.querySelector('.success');

  if (errorModalWindow) {
    const errorCloseButton = errorModalWindow.querySelector('.error__button');
    errorCloseButton.removeEventListener('click', onCloseButton);
    errorModalWindow.removeEventListener('click', onOutsideModalWindow);
    errorModalWindow.remove();
  } else if (successModalWindow) {
    const successCloseButton = successModalWindow.querySelector('.success__button');
    successCloseButton.removeEventListener('click', onCloseButton);
    successModalWindow.removeEventListener('click', onOutsideModalWindow);
    successModalWindow.remove();
  }
}

export {openLoadPictureMessageSuccess, openLoadPictureMessageError};
