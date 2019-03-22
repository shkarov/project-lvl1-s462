import {
  isPair,
  cons,
  car,
  cdr,
} from 'hexlet-pairs';
import main from '../engine';
import getRandomInt from '../lib';

const description = 'What number is missing in the progression ?';

const createProgression = (count, step, acc) => {
  if (count === 0) {
    return acc;
  }
  return createProgression(count - 1, step, cons(car(acc) + step, acc));
};

const createQuestion = (pair, acc, count, indexHidden) => {
  if (!isPair(pair)) {
    return acc;
  }
  const nextValue = (count === indexHidden) ? `.. ${acc}` : `${car(pair)} ${acc}`;
  return createQuestion(cdr(pair), nextValue, count - 1, indexHidden);
};

const createAnswer = (pair, count, indexHidden) => {
  if (count === indexHidden) {
    return car(pair);
  }
  return createAnswer(cdr(pair), count - 1, indexHidden);
};

const createData = () => {
  const numStart = getRandomInt(1, 100);
  const numStep = getRandomInt(1, 20);
  const indexHidden = getRandomInt(1, 10);

  const progression = createProgression(9, numStep, cons(numStart, null));

  const question = createQuestion(progression, '', 10, indexHidden);
  const answer = createAnswer(progression, 10, indexHidden);

  return cons(question, String(answer));
};

export default () => {
  main(description, createData);
};
