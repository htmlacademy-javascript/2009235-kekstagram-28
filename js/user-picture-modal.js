import {isEscapeKey, isEnterKey} from './utils.js';
import {pristine} from './user-picture-upload-form-check.js';
import {setDefaultZoomValue} from './user-picture-set-picture-size.js';
import {defaultFilter} from './user-picture-set-picture-filter.js';
import {changePicturePreview} from './user-picture-set-self-picture.js';

const userPictureModalElement = document.querySelector('.img-upload__overlay');
const userPictureModalOpenElement = document.querySelector('#upload-file');
const userPictureModalCloseElement = userPictureModalElement.querySelector('#upload-cancel');

const userPictureModalForm = document.querySelector('#upload-select-image');
const hashtagsInput = userPictureModalForm.querySelector('input[name="hashtags"]');
const commentInput = userPictureModalForm.querySelector('textarea[name="description"]');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserPictureModal();
  }
};

const onOutsideModalWindow = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeUserPictureModal();
  }
};

const onInputKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

function openUserPictureModal () {
  userPictureModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  userPictureModalElement.addEventListener('click', onOutsideModalWindow);
}

function closeUserPictureModal () {
  userPictureModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  userPictureModalElement.removeEventListener('click', onOutsideModalWindow);
  resetForm();
  setDefaultZoomValue();
  defaultFilter();
}


userPictureModalOpenElement.addEventListener('change', (evt) => {
  changePicturePreview(evt);
  openUserPictureModal();
});

userPictureModalCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUserPictureModal();
});

function resetForm () {
  if (userPictureModalForm) {
    userPictureModalForm.reset();
    pristine.reset();
  }
}

userPictureModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserPictureModal();
  }
});


hashtagsInput.addEventListener('keydown', onInputKeydown);

commentInput.addEventListener('keydown', onInputKeydown);

export {closeUserPictureModal};
