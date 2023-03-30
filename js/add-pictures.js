//import {simularPosts} from './simular-posts.js';
import {getPostsData} from './get-posts.js';


const picturesList = document.querySelector('.pictures');
const newPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//const POSTS_COUNT = 25;
//const simularPictures = simularPosts(POSTS_COUNT);

const simularPictures = await getPostsData();

const addPosts = (pisturesData) => {
  const simularListFragment = document.createDocumentFragment();

  pisturesData.forEach(({ url, description, likes, comments, id}) => {
    const pictureElement = newPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.dataset.pictureId = id;
    simularListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(simularListFragment);
};

addPosts(simularPictures);

export {simularPictures, addPosts};
