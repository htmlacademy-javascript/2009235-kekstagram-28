import {addPosts} from './add-pictures.js';
import {findBigPicturelOpenElements} from './big-picture-modal.js';

const PICTURES_RANDOM_COUNT = 10;
const picturesList = document.querySelector('.pictures');
let postsData = [];

const getPostsDataForSort = (data) => {
  postsData = data;
};

const clearPictures = () => {
  const addedPictures = picturesList.querySelectorAll('.picture');
  addedPictures.forEach((picture) => picture.remove());
};

const getRandomPicture = () => Math.random() - 0.5;

const sortRandom = () => {
  const randomPictures = postsData.slice().sort(getRandomPicture).slice(0, PICTURES_RANDOM_COUNT);
  addPosts(randomPictures);
};

const compareMoreDiscussed = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const sortDiscussed = () => {
  const discussedPictures = postsData.slice().sort(compareMoreDiscussed);
  addPosts(discussedPictures);
};

const sortDefault = () => addPosts(postsData);

const startSort = (id) => {
  clearPictures();
  if (id === 'filter-random') {
    sortRandom();
  } else if (id === 'filter-discussed') {
    sortDiscussed();
  } else {
    sortDefault();
  }
  findBigPicturelOpenElements();
};

export {startSort, getPostsDataForSort};
