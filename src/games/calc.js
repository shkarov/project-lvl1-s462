import { cons } from 'hexlet-pairs';
import main from '../engine';
import getRandomInt from '../lib';

const description = 'What is the result of the expression?';

const getSignRandom = (num) => {
  if (num === 1) {
    return '+';
  }
  if (num === 2) {
    return '-';
  }
  if (num === 3) {
    return '*';
  }
  return '';
};

const calculateNums = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1;
  }
};

const createData = () => {
  const num1 = getRandomInt(2, 100);
  const num2 = getRandomInt(2, 100);

  const sign = getSignRandom(getRandomInt(1, 3));

  const question = `${num1} ${sign} ${num2}`;
  const answer = calculateNums(num1, num2, sign);

  return cons(question, String(answer));
};

export default () => {
  main(description, createData);
};
