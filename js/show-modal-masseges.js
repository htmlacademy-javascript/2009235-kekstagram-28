const VIEV_COMMENTS_COUNT = 5;
const usersComments = document.querySelector('.social__comments').children;
let vievCommentsCount = VIEV_COMMENTS_COUNT;

function showFirstComments () {
  for (let i = usersComments.length - 1; i >= vievCommentsCount; i--) {
    usersComments[i].classList.add('hidden');
  }
  showCommentsCount();
}

function showNewCountComments () {
  const beforeVievCommentsCount = vievCommentsCount - VIEV_COMMENTS_COUNT - 1;

  if (usersComments.length < vievCommentsCount) {
    for (let i = beforeVievCommentsCount; i < usersComments.length; i++) {
      usersComments[i].classList.remove('hidden');
    }
  } else {
    for (let i = beforeVievCommentsCount; i < vievCommentsCount; i++) {
      usersComments[i].classList.remove('hidden');
    }
  }

  showCommentsCount();
}

const modalWindowShowCommentsCount = document.querySelector('.social__comment-count');
const modalWindowShowCommentsButton = document.querySelector('.comments-loader');

function showCommentsCount () {
  const usersCommentsAll = usersComments;
  let usersCommentsShows = 0;

  for (let i = usersCommentsAll.length - 1; i >= 0; i--) {
    if (!usersCommentsAll[i].classList.contains('hidden')) {
      usersCommentsShows++;
    }
  }

  modalWindowShowCommentsCount.firstChild.data = `${usersCommentsShows} из `;

  if (usersCommentsShows === usersComments.length) {
    modalWindowShowCommentsButton.classList.add('hidden');
  } else {
    modalWindowShowCommentsButton.classList.remove('hidden');
  }
}

modalWindowShowCommentsButton.addEventListener('click', () => {
  vievCommentsCount += VIEV_COMMENTS_COUNT;
  showNewCountComments();
});

function userModalElementClearContent () {
  vievCommentsCount = VIEV_COMMENTS_COUNT;
  modalWindowShowCommentsButton.removeEventListener('click');
}

export {showFirstComments,userModalElementClearContent};
