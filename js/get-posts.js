//import {getData} from './api.js';
//import {showAlert} from './utils.js';

async function getPostsData () {
  const response = await fetch('https://28.javascript.pages.academy/kekstagram/data');
  if (!response.ok) {
    throw new Error(`${response.status} — ${response.statusText}`);
  }
  return response.json();
}

/*import {simularPictures} from './add-pictures.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';

getData()
  .then((postsData) => {
    simularPictures(postsData);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
  */

export {getPostsData};
