import { cons } from 'hexlet-pairs';
import main from '../engine';
import getRandomInt from '../lib';

const description = 'Find the greatest common divisor of given numbers.';

const searchNOD = (num1, num2) => {
  let arg1 = num1;
  let arg2 = num2;
  while (arg1 !== arg2) {
    if (arg1 > arg2) {
      arg1 -= arg2;
    } else {
      arg2 -= arg1;
    }
  }
  return arg1;
};

const createData = () => {
  const num1 = getRandomInt(2, 47);
  const num2 = getRandomInt(2, 47);

  const question = `${num1} ${num2}`;
  const answer = searchNOD(num1, num2);

  return cons(question, String(answer));
};

export default () => {
  main(description, createData);
};
