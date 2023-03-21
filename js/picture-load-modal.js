import {isEscapeKey, isEnterKey} from './utils.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('.img-upload__control');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const onOutsideModalWindow = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  userModalElement.addEventListener('click', onOutsideModalWindow);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  userModalElement.removeEventListener('click', onOutsideModalWindow);
}


userModalOpenElement.addEventListener('click', () => {
  //evt.preventDefault();
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  evt.preventDefault();
  if (isEnterKey(evt)) {
    openUserModal();
  }
});


userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
