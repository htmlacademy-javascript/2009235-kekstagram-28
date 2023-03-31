import {showFirstComments} from './big-picture-show-modal-messages.js';

let postsData = [];

const modalWindow = document.querySelector('.big-picture');
const modalWindowImage = modalWindow.querySelector('img');
const modalWindowDescription = modalWindow.querySelector('.social__caption');
const modalWindowLikesCount = modalWindow.querySelector('.likes-count');
const modalWindowCommentsCount = modalWindow.querySelector('.comments-count');
const modalWindowCommentsList = modalWindow.querySelector('.social__comments');
const modalWindowCommentsItem = modalWindow.querySelector('.social__comment');

const getPostsDataForBigPicture = (data) => {
  postsData = data;
};

const getPostData = (userModalOpenElement) => {
  const postID = +userModalOpenElement.dataset.pictureId;
  const postData = postsData.find((item) => item.id === postID);

  return postData;
};

const addComments = (postData) => {
  modalWindowCommentsList.innerHTML = '';

  const simularListComments = document.createDocumentFragment();
  const postDataComments = postData.comments;

  postDataComments.forEach(({ avatar, message, name}) => {
    const newUserComment = modalWindowCommentsItem.cloneNode(true);

    newUserComment.querySelector('.social__picture').src = avatar;
    newUserComment.querySelector('.social__picture').alt = name;
    newUserComment.querySelector('.social__text').textContent = message;
    simularListComments.appendChild(newUserComment);
  });

  modalWindowCommentsList.appendChild(simularListComments);
};

const bigPictureAddContent = (userModalOpenElement) => {
  const postData = getPostData(userModalOpenElement);

  modalWindowImage.src = postData.url;
  modalWindowImage.alt = postData.description;
  modalWindowDescription.textContent = postData.description;
  modalWindowLikesCount.textContent = postData.likes;
  modalWindowCommentsCount.textContent = postData.comments.length;
  addComments(postData);
  showFirstComments();
};

export {bigPictureAddContent, getPostsDataForBigPicture};
