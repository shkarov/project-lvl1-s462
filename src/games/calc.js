import { cons } from 'hexlet-pairs';
import main from '../engine';

const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

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

const ruleGame = 'What is the result of the expression?';

const createData = () => {
  const num1 = getRandomInt(2, 100);
  const num2 = getRandomInt(2, 100);

  const sign = getSignRandom(getRandomInt(1, 3));

  const question = `${num1} ${sign} ${num2}`;
  const answer = calculateNums(num1, num2, sign);

  return cons(question, String(answer));
};

export default () => {
  main(ruleGame, createData);
};
