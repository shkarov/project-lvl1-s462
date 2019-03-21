import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const isEven = num => (num !== 0 && num % 2 === 0);

export const getSignRandom = (num) => {
  if (num === 1) {
    return '+';
  }
  if (num === 2) {
    return '-';
  }
  if (num === 3) {
    return '*';
  }
  return '';
};

export const calculateNums = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1;
  }
};

export const welcome = () => console.log('Welcome to the Brain Games!');

export const ruleOfGame = ruleGame => console.log(ruleGame);

export const getPlayerName = () => readlineSync.question('May I have your name? ');

export const hello = player => console.log(`Hello, ${player} !`);

export const question = data => console.log(`Question: ${data}`);

export const getPlayerAnswer = () => readlineSync.question('Your answer: ');

export const isCorrectAnswer = (playerAnswer, CorrectAnswer) => playerAnswer === CorrectAnswer;

export const incorrectAnswer = (answer, correctAnswer, player) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${player} !`);
};

export const correctAnswer = () => console.log('Correct!');

export const congratulation = player => console.log(`Congratulations, ${player} !`);
