//Функция проверки длины строки

function checkLenght (string, stringLeght) {
  if (string.length === stringLeght) {
    //console.log('строка проходит по длине');
    return true;
  }
  //console.log('строка не проходит');
  return false;
}

checkLenght('Кекс', 4);

//Функция проверки строки палиндрома.

function checkIsPalindrome (string) {
  const stringWithoutSpaces = string.toLowerCase().replaceAll(' ','');

  let stringChangeDirection = '';
  for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
    stringChangeDirection += stringWithoutSpaces[i];
  }

  if (stringWithoutSpaces === stringChangeDirection) {
    //console.log('строка является палиндромом');
    return true;
  }
  //console.log('это не палиндром');
  return false;
}

checkIsPalindrome('Лёша на полке клопа нашёл');

function getNumber (string) {
  const stringWithoutSpaces = string.replaceAll(' ','');

  let number = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isInteger(Number(stringWithoutSpaces[i]))) {
      number += stringWithoutSpaces[i];
    }
  }

  //console.log(parseInt(number, 10));
  return parseInt(number, 10);
}

getNumber('1 кефир, 0.5 батона');

//Функция padStart()

function getString (string, minLength, addedSimbols) {
  let finalstring = '';

  if (string.length < minLength) {
    const countAddedSimbols = minLength - string.length;

    do {
      for (let i = 0; i <= addedSimbols.length - 1; i++) {
        finalstring += addedSimbols[i];
        if (finalstring.length === countAddedSimbols) {
          break;
        }
      }
    } while (finalstring.length < countAddedSimbols);
    finalstring += string;
    return finalstring;
  }

  finalstring = string;
  return finalstring;
  //return(string.padStart(minLength, addedSimbols));
}

getString('qwerty', 11, '012345');
