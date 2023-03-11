import {simularPosts} from './simular-posts.js';

const picturesList = document.querySelector('.pictures');
const newPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const POSTS_COUNT = 25;
const simularPictures = simularPosts(POSTS_COUNT);
//console.log(simularPictures);

const simularListFragment = document.createDocumentFragment();

simularPictures.forEach((picture) => {
  const pictureElement = newPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
  simularListFragment.appendChild(pictureElement);
});

picturesList.appendChild(simularListFragment);
