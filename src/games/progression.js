import { cons } from 'hexlet-pairs';
import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression ?';

const lenProgression = 10;

const createQuestion = (start, step, indexHidden) => {
  const strQuestion = (count, acc) => {
    if (count > lenProgression) {
      return acc;
    }
    const nextValue = (count === indexHidden) ? `${acc} ..` : `${acc} ${start + step * count}`;
    return strQuestion(count + 1, nextValue);
  };
  return strQuestion(1, '');
};

const createData = () => {
  const numStart = getRandomInt(1, 100);
  const numStep = getRandomInt(1, 20);
  const indexHidden = getRandomInt(1, lenProgression);

  const question = createQuestion(numStart, numStep, indexHidden);
  const answer = String(numStart + numStep * indexHidden);

  return cons(question, answer);
};

export default () => {
  playGame(description, createData);
};
