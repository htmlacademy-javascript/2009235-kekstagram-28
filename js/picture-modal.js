import {isEscapeKey, isEnterKey} from './utils.js';
import {userModalElementAddContent} from './add-modal-content.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElementList = document.querySelector('.pictures');
const userModalOpenElements = userModalOpenElementList.querySelectorAll('.picture');
const userModalCloseElement = userModalElement.querySelector('#picture-cancel');

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

function openUserModal (evt) {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  userModalElement.addEventListener('click', onOutsideModalWindow);
  userModalElementAddContent(evt);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  userModalElement.removeEventListener('click', onOutsideModalWindow);
}

function listenModalOpenElement (item) {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserModal(item);
  });

  item.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEnterKey(evt)) {
      openUserModal(item);
    }
  });
}

for (let i = 0; i < userModalOpenElements.length; i++) {
  listenModalOpenElement(userModalOpenElements[i]);
}

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
