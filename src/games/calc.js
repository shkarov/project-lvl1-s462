import { cons } from 'hexlet-pairs';
import main from '../engine';
import { getRandomInt, getSignRandom, calculateNums } from '../lib';

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
