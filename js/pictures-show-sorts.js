import {startSort} from './pictures-sort.js';
import {debounce} from './utils.js';

const RENDER_DELAY = 500;

const picturesFilters = document.querySelector('.img-filters');
const pictureFiltersButtons = document.querySelectorAll('.img-filters__button');

const showPicturesFilters = () => picturesFilters.classList.remove('img-filters--inactive');

const removeActiveClass = () => pictureFiltersButtons.forEach((pictureFiltersButton) => pictureFiltersButton.classList.remove('img-filters__button--active'));

const debounceSort = debounce((filterId) => startSort(filterId), RENDER_DELAY);

const listenPictureFiltersButtons = (pictureFiltersButton) => {
  pictureFiltersButton.addEventListener('click', (evt) => {
    removeActiveClass();
    evt.target.classList.add('img-filters__button--active');
    debounceSort(evt.target.id);
  });
};

for (let i = 0; i < pictureFiltersButtons.length; i++) {
  listenPictureFiltersButtons(pictureFiltersButtons[i]);
}

export {showPicturesFilters};
