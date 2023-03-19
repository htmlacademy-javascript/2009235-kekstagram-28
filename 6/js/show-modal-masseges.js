const VIEV_COMMENTS_COUNT = 5;
const usersComments = document.querySelector('.social__comments').children;

const modalWindowShowCommentsCount = document.querySelector('.social__comment-count');
const modalWindowShowCommentsButton = document.querySelector('.comments-loader');

const showCommentsCount = () => {
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
};

const showFirstComments = () => {
  for (let i = usersComments.length - 1; i >= VIEV_COMMENTS_COUNT; i--) {
    usersComments[i].classList.add('hidden');
  }
  showCommentsCount();
};

const showNewCountComments = (vievCommentsCount) => {
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
};

modalWindowShowCommentsButton.addEventListener('click', () => {
  let vievCommentsCount = VIEV_COMMENTS_COUNT;
  vievCommentsCount += VIEV_COMMENTS_COUNT;
  showNewCountComments(vievCommentsCount);
});


export {showFirstComments};
