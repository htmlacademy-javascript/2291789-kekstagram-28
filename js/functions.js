//Функция проверки длины строки
const isLessOrEqual = (string, length) => {
  return string.length <= length;
};

isLessOrEqual('проверяемая строка', 20);

//Палиндром
const isPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for(let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrome('ДовОд');

//Функция извлечения цифр из строк
const extractNumb = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumb('ECMAScript 2022');

//Функция с дополненными указанными символами
const myPadSt = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + string;
};

myPadSt('qwerty', 4, '0');
