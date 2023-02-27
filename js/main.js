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
  let i = 0;

  return function () {
    i += 1;
    return i;
  };
};

const photoDescriptions = [
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

const userNames = [
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

const URL_MAX_COUNT = 25;

const generatePostID = createdIdGenerator(); //or createRandomIdFromRangeGenerator(1, 25)
const generateRandomURL = createRandomIdFromRangeGenerator(1, URL_MAX_COUNT);
const generateComentID = createdIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 10;

const createComment = () => ({
  id: generateComentID(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_MAX_COUNT) }.svg`,
  message: getRandomArrayElement(messageBlanks),
  name: getRandomArrayElement(userNames),
});

const createPost = () => ({
  id: generatePostID(),
  url: `photos/${ generateRandomURL() }.jpg`,
  description: getRandomArrayElement(photoDescriptions),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_MAX_COUNT)}, createComment),
});

const similarPosts = () => Array.from({length: 25}, createPost);

similarPosts();

//console.log(similarPosts());
