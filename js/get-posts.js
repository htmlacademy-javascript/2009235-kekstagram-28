import {getData} from './api.js';
import {showAlert} from './utils.js';
//import {showPicturesFilters} from './show-pictures-filters.js';

async function getPostsData () {
  try {
    const response = await getData();
    //showPicturesFilters();
    return response;
  } catch (err) {
    showAlert(err.message);
  }
}

export {getPostsData};
