import {startSort} from './sort-pictures.js';
import {findModalOpenElements} from './picture-modal.js';

const picturesFilters = document.querySelector('.img-filters');
const pictureFiltersButtons = document.querySelectorAll('.img-filters__button');

const showPicturesFilters = () => picturesFilters.classList.remove('img-filters--inactive');

if (document.querySelector('.picture')) {
  showPicturesFilters();
}

const removeActiveClass = () => pictureFiltersButtons.forEach((pictureFiltersButton) => pictureFiltersButton.classList.remove('img-filters__button--active'));

function listenPictureFiltersButtons (pictureFiltersButton) {
  pictureFiltersButton.addEventListener('click', (evt) => {
    removeActiveClass();
    evt.target.classList.add('img-filters__button--active');
    startSort(evt.target.id);
    findModalOpenElements();
  });
}

for (let i = 0; i < pictureFiltersButtons.length; i++) {
  listenPictureFiltersButtons(pictureFiltersButtons[i]);
}

export {showPicturesFilters};
