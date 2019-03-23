import { cons } from 'hexlet-pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num !== 0 && num % 2 === 0);

const createData = () => {
  const question = getRandomInt(2, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  playGame(description, createData);
};
