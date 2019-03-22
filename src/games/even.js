import { cons } from 'hexlet-pairs';
import main from '../engine';

const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const isEven = num => (num !== 0 && num % 2 === 0);

const ruleGame = 'Answer "yes" if number even otherwise answer "no".';

const createData = () => {
  const question = getRandomInt(2, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  main(ruleGame, createData);
};
