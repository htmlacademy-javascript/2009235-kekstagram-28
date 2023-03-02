import {getRandomInteger} from './get-random-integer.js';
import {createRandomIdFromRangeGenerator} from './create-random-id-from-range-generator.js';
import {createdIdGenerator} from './created-id-generator.js';

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
const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 10;

const generatePostID = createdIdGenerator();
const generateRandomURL = createRandomIdFromRangeGenerator(1, URL_MAX_COUNT);
//const generateComentID = createdIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (index) => ({
  //id: generateComentID(),
  id: index,
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_MAX_COUNT) }.svg`,
  message: getRandomArrayElement(messageBlanks),
  name: getRandomArrayElement(userNames),
});

const createComments = () => Array.from({length: getRandomInteger(0, COMMENTS_MAX_COUNT)}, (_, commentIndex) => createComment(commentIndex + 1));

const createPost = () => ({
  id: generatePostID(),
  url: `photos/${ generateRandomURL() }.jpg`,
  description: getRandomArrayElement(photoDescriptions),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  //comments: Array.from({length: getRandomInteger(0, COMMENTS_MAX_COUNT)}, createComment),
  comments: createComments(),
});

const simularPosts = () => Array.from({length: 25}, createPost);

export {simularPosts};
