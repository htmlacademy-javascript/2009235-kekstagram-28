const uploadImageForm = document.querySelector('#upload-select-image');
const uploadFile = uploadImageForm.querySelector('#upload-file');


const pristine = new Pristine(uploadImageForm);


const regexpImageJpg = /'.jpg$'/i;
const regexpImagePng = /'.png$'/i;

function validateFile (value) {
  return regexpImageJpg.test(value) || regexpImagePng.test(value);
}

pristine.addValidator(
  uploadFile,
  validateFile,
);

pristine.validate(uploadFile);

/*----------*/

const regexpHashtag = /'^#[a-zа-яё0-9]$'/i;

function validateHashtag (value) {
  const hashtags = value.split(' ');
  hashtags.forEach((hashtag) => {
    regexpImageJpg.test(hashtag.trim());
  });
}

pristine.addValidator(
  uploadImageForm.querySelector(),
  validateHashtag,
);

/*----------*/

uploadImageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    }
});


