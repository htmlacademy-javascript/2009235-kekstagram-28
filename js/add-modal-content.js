import {simularPictures} from './add-pictures.js';
import {showFirstComments} from './show-modal-masseges.js';
const postsData = simularPictures;
//console.log(postsData);

const modalWindow = document.querySelector('.big-picture');
const modalWindowImage = modalWindow.querySelector('img');
const modalWindowDescription = modalWindow.querySelector('.social__caption');
const modalWindowLikesCount = modalWindow.querySelector('.likes-count');
const modalWindowCommentsCount = modalWindow.querySelector('.comments-count');

let postData;

function userModalElementAddContent (evt) {
  const newImage = evt.querySelector('.picture__img');
  modalWindowImage.src = newImage.src;
  modalWindowImage.alt = newImage.alt;

  for (let i = 0; i < postsData.length; i++) {
    if (postsData[i].url === newImage.getAttribute('src')) {
      postData = postsData[i];
    }
  }

  modalWindowDescription.textContent = postData.description;
  modalWindowLikesCount.textContent = postData.likes;
  modalWindowCommentsCount.textContent = postData.comments.length;
  addComments();
  showFirstComments();
}

const modalWindowCommentsList = modalWindow.querySelector('.social__comments');
const modalWindowCommentsItem = modalWindow.querySelector('.social__comment');

function addComments () {
  modalWindowCommentsList.innerHTML = '';

  const simularListComments = document.createDocumentFragment();
  const postDataComments = postData.comments;
  postDataComments.reverse();

  postDataComments.forEach(({ avatar, message, name}) => {
    const newUserComment = modalWindowCommentsItem.cloneNode(true);

    newUserComment.querySelector('.social__picture').src = avatar;
    newUserComment.querySelector('.social__picture').alt = name;
    newUserComment.querySelector('.social__text').textContent = message;
    simularListComments.appendChild(newUserComment);
  });

  modalWindowCommentsList.appendChild(simularListComments);
}

export {userModalElementAddContent};
