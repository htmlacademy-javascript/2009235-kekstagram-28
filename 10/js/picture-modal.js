import {isEscapeKey, isEnterKey} from './utils.js';
import {userModalElementAddContent} from './add-modal-content.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElementList = document.querySelector('.pictures');
const userModalOpenElements = userModalOpenElementList.children;
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

function listenModalOpenElement (item) {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserModal();
    userModalElementAddContent(item);
  });

  item.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEnterKey(evt)) {
      openUserModal();
    }
  });
}

for (let i = userModalOpenElements.length - 1; i >= 0; i--) {
  if (userModalOpenElements[i].classList.contains('picture')) {
    listenModalOpenElement(userModalOpenElements[i]);
  }
}

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
