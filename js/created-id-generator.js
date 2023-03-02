const createdIdGenerator = () => {
  let i = 0;

  return function () {
    i += 1;
    return i;
  };
};

export {createdIdGenerator};
