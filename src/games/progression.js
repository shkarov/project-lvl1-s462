import { cons } from 'hexlet-pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression ?';

const progressionLength = 10;

const createQuestion = (start, step, indexOfHiddenItem) => {
  const stringOfQuestion = (count, acc) => {
    if (count > progressionLength) {
      return acc;
    }
    const accValue = (count === indexOfHiddenItem) ? `${acc} ..` : `${acc} ${start + step * count}`;
    return stringOfQuestion(count + 1, accValue);
  };
  return stringOfQuestion(1, '');
};

const createData = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 20);
  const indexOfHiddenItem = getRandomInt(1, progressionLength);

  const question = createQuestion(start, step, indexOfHiddenItem);
  const answer = String(start + step * indexOfHiddenItem);

  return cons(question, answer);
};

export default () => {
  playGame(description, createData);
};
