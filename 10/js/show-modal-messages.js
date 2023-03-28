const VIEW_COMMENTS_COUNT = 5;
const usersComments = document.querySelector('.social__comments').children;
let viewCommentsCount = VIEW_COMMENTS_COUNT;

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

  modalWindowShowCommentsButton.classList.toggle('hidden', usersCommentsShows === usersComments.length);
};

const showFirstComments = () => {
  viewCommentsCount = VIEW_COMMENTS_COUNT;
  for (let i = usersComments.length - 1; i >= VIEW_COMMENTS_COUNT; i--) {
    usersComments[i].classList.add('hidden');
  }
  showCommentsCount();
};

const showNewCountComments = (commentsCount) => {
  const beforeviewCommentsCount = commentsCount - VIEW_COMMENTS_COUNT - 1;

  if (usersComments.length < commentsCount) {
    for (let i = beforeviewCommentsCount; i < usersComments.length; i++) {
      usersComments[i].classList.remove('hidden');
    }
  } else {
    for (let i = beforeviewCommentsCount; i < commentsCount; i++) {
      usersComments[i].classList.remove('hidden');
    }
  }

  showCommentsCount();
};

modalWindowShowCommentsButton.addEventListener('click', () => {
  viewCommentsCount += VIEW_COMMENTS_COUNT;
  showNewCountComments(viewCommentsCount);
});


export {showFirstComments};
