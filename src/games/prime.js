import { cons } from 'hexlet-pairs';
import main from '../engine';
import getRandomInt from '../lib';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num, counter = 2) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % counter === 0) {
    return false;
  }
  if (counter > Math.round(Math.sqrt(num))) {
    return true;
  }
  return isPrime(num, counter + 1);
};

const createData = () => {
  const question = getRandomInt(1, 100);
  const answer = (isPrime(question)) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  main(description, createData);
};
