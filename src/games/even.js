import { cons } from 'hexlet-pairs';
import main from '../engine';
import { getRandomInt, isEven } from '../lib';

const ruleGame = 'Answer "yes" if number even otherwise answer "no".';

const createData = () => {
  const question = getRandomInt(2, 100);
  const answer = (isEven(question)) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  main(ruleGame, createData);
};
