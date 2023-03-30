const picturesList = document.querySelector('.pictures');
const newPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const addPosts = (picturesData) => {
  const simularListFragment = document.createDocumentFragment();

  picturesData.forEach(({ url, description, likes, comments, id}) => {
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


export {addPosts};
