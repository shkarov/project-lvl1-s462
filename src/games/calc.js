import { cons } from 'hexlet-pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';

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

  const setMathSimbols = '+-*';

  const sign = setMathSimbols.substr(getRandomInt(1, 3) - 1, 1);

  const question = `${num1} ${sign} ${num2}`;
  const answer = calculateNums(num1, num2, sign);

  return cons(question, String(answer));
};

export default () => {
  playGame(description, createData);
};
