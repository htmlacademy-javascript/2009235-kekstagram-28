import {isEscapeKey, isEnterKey} from './utils.js';
import {pristine} from './picture-upload-form-check.js';
import {setDefaultZoomValue} from './set-picture-size.js';
import {defaultFilter} from './set-picture-filter.js';
import {changePicturePreview} from './picture-load-modal-picture.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalOpenElement = document.querySelector('#upload-file');
const userModalCloseElement = userModalElement.querySelector('#upload-cancel');

const userModalForm = document.querySelector('#upload-select-image');
const hashtagsInput = userModalForm.querySelector('input[name="hashtags"]');
const commentInput = userModalForm.querySelector('textarea[name="description"]');

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
  resetForm();
  setDefaultZoomValue();
  defaultFilter();
}


userModalOpenElement.addEventListener('change', (evt) => {
  changePicturePreview(evt);
  openUserModal();
});

userModalCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUserModal();
});

function resetForm () {
  if (userModalForm) {
    userModalForm.reset();
    pristine.reset();
  }
}

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});


hashtagsInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

commentInput.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

export {closeUserModal};
