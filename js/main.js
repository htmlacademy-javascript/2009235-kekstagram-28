const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      //console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createdIdGenerator = () => {
  const previousValues = [];

  return function () {
    let i = 0;
    i += 1;

    while (previousValues.includes(i)) {
      i += 1;
    }
    previousValues.push(i);
    return i;
  };
};

const photoDescription = [
  'А как прошли твои выходные?)',
  'Работа, работа, перейди на Федота',
  'Акуна Матата',
  'Закрой глаза и наслаждайся',
  'Много ошибок, но жизнь счастливая',
  'Каждый день по-своему прекрасен',
  'Живу каждой клеткой своего организма',
  'Ну как-то так...',
  'Это превыше всего: быть верным самому себе.',
  'Думаете ли вы, что можете, или думаете, что не можете – в обоих случаях вы правы.',
];

const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const messageBlanks = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const urlMaxCount = 25;

const generateRandomID = createRandomIdFromRangeGenerator(1, 25); //or createdIdGenerator()
const generateRandomURL = createRandomIdFromRangeGenerator(1, urlMaxCount);
const generateComentID = createdIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const avatarMaxCount = 6;
const likesMinCount = 15;
const likesMaxCount = 200;
const commentsMaxCount = 10;

const createComment = () => ({
  id: generateComentID(),
  avatar: `img/avatar-${ getRandomInteger(1, avatarMaxCount) }.svg`,
  message: getRandomArrayElement(messageBlanks),
  name: getRandomArrayElement(names),
});

const createPost = () => ({
  id: generateRandomID(),
  url: `photos/${ generateRandomURL() }.jpg`,
  description: getRandomArrayElement(photoDescription),
  likes: getRandomInteger(likesMinCount, likesMaxCount),
  comments: Array.from({length: getRandomInteger(0, commentsMaxCount)}, createComment),
});

const similarPosts = () => Array.from({length: 25}, createPost);

similarPosts();

//console.log(similarPosts());
