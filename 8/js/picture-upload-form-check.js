const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFile = uploadImageForm.querySelector('#upload-file');
const hashtagsInput = uploadImageForm.querySelector('input[name="hashtags"]');
const commentInput = document.querySelector('textarea[name="description"]');

const pristine = new Pristine(uploadImageForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});


function validateFile (value) {
  return /.jpg$/i.test(value) || /.png$/i.test(value) || /.jpeg$/i.test(value);
}

pristine.addValidator(
  uploadFile,
  validateFile,
);

/*----------*/

const regexpHashtag = /^#[a-zа-яё0-9]{1,19}$/i;
let errorMessage = '';

function validateHashtag (value) {
  if (value.length === 0){
    return true;
  }

  let errors = 0;

  if (value.trim() === ''){
    errors++;
    errorMessage = 'Веедены только пробелы.';
  }

  const hashtags = value.split(' ').filter((hashtag) => hashtag.length > 0);

  if (hashtags.length > 5) {
    errors++;
    errorMessage = 'Нельзя указать больше пяти хэш-тегов.';
  }

  const lowerCasehashtags = hashtags.map((hashtag) => hashtag.toLowerCase());
  const duplicates = lowerCasehashtags.filter((number, index, numbers) => numbers.indexOf(number) !== index);

  if (duplicates.length > 0) {
    errors++;
    errorMessage = 'Один и тот же хэш-тег не может быть использован дважды.';
  }

  hashtags.forEach((hashtag) => {
    if (!regexpHashtag.test(hashtag)) {
      errors++;
    }

    if (!/[a-zа-яё0-9]{1,19}$/i.test(hashtag)) {
      errorMessage = 'Хеш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т.п.), символы пунктуации (тире, дефис, запятая и т.п.), эмодзи и т.д.';
    }

    if (hashtag.length > 20) {
      errorMessage = 'Максимальная длина одного хэш-тега 20 символов, включая решётку.';
    }

    if (!/^#/.test(hashtag)) {
      errorMessage = 'Хеш-тег должен начинаться с решётки.';
    }

    if (hashtag.length === 1 && hashtag[0] === '#') {
      errorMessage = 'Хеш-тег не может состоять только из одной решётки.';
    }
  });

  if (value.trim() === '#'){
    errors++;
    errorMessage = 'Хеш-тег не может состоять только из одной решётки.';
  }

  return errors === 0;
}

function validateHashtagMassage () {
  return errorMessage;
}

pristine.addValidator(
  hashtagsInput,
  validateHashtag,
  validateHashtagMassage,
);

/*----------*/

function validateComment (value) {
  if (value.length === 0){
    return true;
  }

  return value.length <= 140;
}

pristine.addValidator(
  commentInput,
  validateComment,
  'До 140 символов',
);

/*----------*/

uploadImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  /*const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }*/
});

export {pristine};
