import readlineSync from 'readline-sync';

const COUNT_GAMES = 3;
const INT_MIN = 2;
const INT_MAX = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num !== 0 && num % 2 === 0);

const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player} !`);
  console.log('Answer "yes" if number even otherwise answer "no".');

  const checkAnswer = (count, num) => {
    if (count < 1) {
      console.log(`Congratulations, ${player} !`);
      return;
    }
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
      console.log('Correct!');
      return checkAnswer(count - 1, getRandomInt(INT_MIN, INT_MAX));
    }
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return;
  };

  return checkAnswer(COUNT_GAMES, getRandomInt(INT_MIN, INT_MAX));
};

export default checkEven;
