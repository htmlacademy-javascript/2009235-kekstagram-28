import {getData} from './api.js';
import {showAlert} from './utils.js';
import {addPosts} from './add-pictures.js';
import {getPostsDataForBigPicture} from './add-modal-content.js';
import {showPicturesFilters} from './show-pictures-filters.js';
import {getPostsDataForSort} from './sort-pictures.js';


try {
  const response = await getData();
  addPosts(response);
  getPostsDataForBigPicture(response);
  showPicturesFilters();
  getPostsDataForSort(response);
} catch (err) {
  showAlert(err.message);
}
