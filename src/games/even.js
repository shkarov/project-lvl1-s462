import readlineSync from 'readline-sync';

const countGames = 3;
const intMin = 2;
const intMax = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => (num !== 0 && num % 2 === 0);

const isRightAnswer = (num, answer) => (isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no');

const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player} !`);
  console.log('Answer "yes" if number even otherwise answer "no".');

  const isCheckAnswer = (count, num) => {
    if (count < 1) {
      return true;
    }
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    if (!isRightAnswer(num, answer)) {
      return false;
    }
    console.log('Correct!');
    return isCheckAnswer(count - 1, getRandomInt(intMin, intMax));
  };

  if (isCheckAnswer(countGames, getRandomInt(intMin, intMax))) {
    console.log(`Congratulations, ${player} !`);
  } else {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${player} !`);
  }
};

export default checkEven;
