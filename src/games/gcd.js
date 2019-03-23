import { cons } from 'hexlet-pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const searchNOD = (value1, value2) => {
  if (value1 === value2) {
    return value1;
  }
  const newValue1 = value1 > value2 ? value1 - value2 : value1;
  const newValue2 = value2 > value1 ? value2 - value1 : value2;
  return searchNOD(newValue1, newValue2);
};

const createData = () => {
  const num1 = getRandomInt(2, 47);
  const num2 = getRandomInt(2, 47);

  const question = `${num1} ${num2}`;
  const answer = String(searchNOD(num1, num2));

  return cons(question, answer);
};

export default () => {
  playGame(description, createData);
};
