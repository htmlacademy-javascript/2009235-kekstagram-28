import {isEscapeKey, isEnterKey} from './utils.js';
import {bigPictureAddContent} from './big-picture-add-modal-content.js';

const bigPictureModalElement = document.querySelector('.big-picture');
const bigPictureModalOpenElementList = document.querySelector('.pictures');
const bigPictureModalOpenElements = bigPictureModalOpenElementList.children;
const bigPictureModalCloseElement = bigPictureModalElement.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

const onOutsideModalWindow = (evt) => {
  if (evt.target === evt.currentTarget) {
    closeBigPictureModal();
  }
};

function openBigPictureModal () {
  bigPictureModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureModalElement.addEventListener('click', onOutsideModalWindow);
}

function closeBigPictureModal () {
  bigPictureModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureModalElement.removeEventListener('click', onOutsideModalWindow);
}

function listenBigPictureOpenElement (item) {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPictureModal();
    bigPictureAddContent(item);
  });

  item.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEnterKey(evt)) {
      openBigPictureModal();
    }
  });
}

function findBigPicturelOpenElements () {
  for (let i = bigPictureModalOpenElements.length - 1; i >= 0; i--) {
    if (bigPictureModalOpenElements[i].classList.contains('picture')) {
      listenBigPictureOpenElement(bigPictureModalOpenElements[i]);
    }
  }
}

findBigPicturelOpenElements();

bigPictureModalCloseElement.addEventListener('click', () => {
  closeBigPictureModal();
});

bigPictureModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPictureModal();
  }
});

export {findBigPicturelOpenElements};
