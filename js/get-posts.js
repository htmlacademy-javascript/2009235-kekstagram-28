import {getData} from './api.js';
import {showAlert} from './utils.js';

async function getPostsData () {
  try {
    const response = await getData();
    return response;
  } catch (err) {
    showAlert(err.message);
  }
}

export {getPostsData};
