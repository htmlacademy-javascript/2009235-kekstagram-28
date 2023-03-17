import {isEscapeKey, isEnterKey} from './utils.js';
import {userModalElementAddContent} from './add-modal-content.js';
import {userModalElementClearContent} from './show-modal-masseges.js';

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

function openUserModal (evt) {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
  userModalElementAddContent(evt);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
  userModalElementClearContent();
}

for (const userModalOpenElement of userModalOpenElements) {
  userModalOpenElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserModal(userModalOpenElement);
  });

  userModalOpenElement.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEnterKey(evt)) {
      openUserModal(userModalOpenElement);
    }
  });
}

for (const userModalOpenElement of userModalOpenElements) {
  userModalOpenElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openUserModal(userModalOpenElement);
  });

  userModalOpenElement.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEnterKey(evt)) {
      openUserModal(userModalOpenElement);
    }
  });
}

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalElement.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closeUserModal();
  }
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});
