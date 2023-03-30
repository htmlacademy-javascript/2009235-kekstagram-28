import {getData} from './api.js';
import {showAlert} from './utils.js';
import {addPosts} from './add-pictures.js';
import {getPostsDataForBigPicture} from './big-picture-add-modal-content.js';
import {showPicturesFilters} from './pictures-show-sorts.js';
import {getPostsDataForSort} from './pictures-sort.js';


try {
  const response = await getData();
  addPosts(response);
  getPostsDataForBigPicture(response);
  showPicturesFilters();
  getPostsDataForSort(response);
} catch (err) {
  showAlert(err.message);
}
