const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFile = uploadImageForm.querySelector('#upload-file');
const hashtagsInput = uploadImageForm.querySelector('input[name="hashtags"]');

const pristine = new Pristine(uploadImageForm);


function validateFile (value) {
  return /.jpg$/i.test(value) || /.png$/i.test(value) || /.jpeg$/i.test(value);
}

pristine.addValidator(
  uploadFile,
  validateFile,
);


function validateHashtag (value) {
  if (value.length === 0){
    return true;
  }

  const hashtags = value.split(' ').filter((hashtag) => hashtag.length > 0);
  let errors = 0;

  if (hashtags.length > 5) {
    errors++;
  }

  const duplicates = hashtags.filter((number, index, numbers) => numbers.indexOf(number) !== index);

  if (duplicates.length > 0) {
    errors++;
  }

  const regexpHashtag = /^#[a-zа-яё0-9]{1,19}$/i;

  hashtags.forEach((hashtag) => {
    const isHashtag = regexpHashtag.test(hashtag);

    if (!isHashtag) {
      errors++;
    }
  });

  return errors === 0;
}

pristine.addValidator(
  hashtagsInput,
  validateHashtag,
);

uploadImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  const isValid = pristine.validate();
  if (isValid) {
    //console.log('Можно отправлять');
  } else {
    //console.log('Форма невалидна');
  }
});
