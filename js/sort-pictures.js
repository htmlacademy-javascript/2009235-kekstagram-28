import {simularPictures, addPosts} from './add-pictures.js';

const picturesList = document.querySelector('.pictures');

const postsData = simularPictures;
const PICTURES_RANDOM_COUNT = 10;

const clearPictures = () => {
  const addedPictures = picturesList.querySelectorAll('.picture');
  addedPictures.forEach((picture) => picture.remove());
};

const getRandomPicture = () => Math.random() - 0.5;

const sortRandom = () => {
  const randomPictures = postsData.slice().sort(getRandomPicture).slice(0, PICTURES_RANDOM_COUNT);
  clearPictures();
  addPosts(randomPictures);
};

const compareMoreDiscussed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const sortDiscussed = () => {
  const discussedPictures = postsData.slice().sort(compareMoreDiscussed);
  clearPictures();
  addPosts(discussedPictures);
};

const sortDefault = () => {
  clearPictures();
  addPosts(postsData);
};

const startSort = (id) => {
  if (id === 'filter-random') {
    sortRandom();
  } else if (id === 'filter-discussed') {
    sortDiscussed();
  } else {
    sortDefault();
  }
};

export {startSort};
