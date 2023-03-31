import {startSort} from './pictures-sort.js';
import {findBigPicturelOpenElements} from './big-picture-modal.js';
import {debounce} from './utils.js';

const picturesFilters = document.querySelector('.img-filters');
const pictureFiltersButtons = document.querySelectorAll('.img-filters__button');

const showPicturesFilters = () => picturesFilters.classList.remove('img-filters--inactive');

const removeActiveClass = () => pictureFiltersButtons.forEach((pictureFiltersButton) => pictureFiltersButton.classList.remove('img-filters__button--active'));

const listenPictureFiltersButtons = (pictureFiltersButton) => {
  pictureFiltersButton.addEventListener('click', (evt) => {
    removeActiveClass();
    evt.target.classList.add('img-filters__button--active');
    const debouncedSort = debounce(() => {
      startSort(evt.target.id);
      findBigPicturelOpenElements();
    });
    debouncedSort();
  });
};

for (let i = 0; i < pictureFiltersButtons.length; i++) {
  listenPictureFiltersButtons(pictureFiltersButtons[i]);
}

export {showPicturesFilters};
