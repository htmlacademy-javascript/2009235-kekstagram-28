import {simularPosts} from './simular-posts.js';

const picturesList = document.querySelector('.pictures');
const newPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const POSTS_COUNT = 25;
const simularPictures = simularPosts(POSTS_COUNT);

const simularListFragment = document.createDocumentFragment();

simularPictures.forEach(({ url, description, likes, comments, id}) => {
  const pictureElement = newPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;
  simularListFragment.appendChild(pictureElement);
});

const addPosts = () => picturesList.appendChild(simularListFragment);

addPosts();

export {simularPictures};
