import {showAlert} from './utils.js';
import {sendData} from './api.js';
import {openLoadPictureMessageSuccess, openLoadPictureMessageError} from './picture-load-modal-messages.js';
import {closeUserModal} from './picture-load-modal.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовывается...'
};

const MAX_HASHTAGS_COUNT = 5;
const MAX_HASHTAG_LENGHT = 20;
const MAX_COMMENT_LENGTH = 140;

const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFile = uploadImageForm.querySelector('#upload-file');
const hashtagsInput = uploadImageForm.querySelector('input[name="hashtags"]');
const commentInput = uploadImageForm.querySelector('textarea[name="description"]');
const submitButton = uploadImageForm.querySelector('button[type="submit"]');

const regexpHashtag = /^#[a-zа-яё0-9]{1,19}$/i;
let hashtagsErrorMessage = '';
const commentErrorMessage = `До ${ MAX_COMMENT_LENGTH } символов`;

const pristine = new Pristine(uploadImageForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});


const validateFile = (value) => /.jpg$/i.test(value) || /.png$/i.test(value) || /.jpeg$/i.test(value);

pristine.addValidator(
  uploadFile,
  validateFile,
);

/*----------*/

const validateHashtag = (value) => {
  if (value.length === 0){
    return true;
  }

  let errors = 0;

  if (value.trim() === ''){
    errors++;
    hashtagsErrorMessage = 'Введены только пробелы.';
  }

  const hashtags = value.split(' ').filter((hashtag) => hashtag.length > 0);

  if (hashtags.length > MAX_HASHTAGS_COUNT) {
    errors++;
    hashtagsErrorMessage = `Нельзя указать больше ${ MAX_HASHTAGS_COUNT } хэш-тегов.`;
  }

  const lowerCaseHashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  const duplicates = lowerCaseHashtags.filter((hashtag, index, hashtagsArray) => hashtagsArray.indexOf(hashtag) !== index);

  if (duplicates.length > 0) {
    errors++;
    hashtagsErrorMessage = 'Один и тот же хэш-тег не может быть использован дважды.';
  }

  hashtags.forEach((hashtag) => {
    if (!regexpHashtag.test(hashtag)) {
      errors++;
      hashtagsErrorMessage = 'Хеш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т.п.), символы пунктуации (тире, дефис, запятая и т.п.), эмодзи и т.д.';
    }

    if (hashtag.length > MAX_HASHTAG_LENGHT) {
      hashtagsErrorMessage = `Максимальная длина одного хэш-тега ${ MAX_HASHTAG_LENGHT } символов, включая решётку.`;
    }

    if (!/^#/.test(hashtag)) {
      hashtagsErrorMessage = 'Хеш-тег должен начинаться с решётки.';
    } else if (hashtag.length === 1) {
      hashtagsErrorMessage = 'Хеш-тег не может состоять только из одной решётки.';
    }
  });

  if (value.trim() === '#'){
    errors++;
    hashtagsErrorMessage = 'Хеш-тег не может состоять только из одной решётки.';
  }

  return errors === 0;
};

const validateHashtagMessage = () => hashtagsErrorMessage;

pristine.addValidator(
  hashtagsInput,
  validateHashtag,
  validateHashtagMessage,
);

/*----------*/

const validateComment = (value) => value.length === 0 || value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(
  commentInput,
  validateComment,
  commentErrorMessage,
);

/*----------*/

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

/*----------*/

const setUserFormSubmit = (onSuccess) => {
  uploadImageForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(openLoadPictureMessageSuccess())
        .catch(
          (err) => {
            openLoadPictureMessageError();
            showAlert(err.message);
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

setUserFormSubmit(closeUserModal);

export {pristine, setUserFormSubmit};
