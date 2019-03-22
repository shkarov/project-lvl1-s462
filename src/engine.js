import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const isCorrectAnswer = (playerAnswer, CorrectAnswer) => playerAnswer === CorrectAnswer;

const countGames = 3;

const main = (ruleGame, funcCreateDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleGame);
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player} !`);

  const callGame = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${player} !`);
      return 0;
    }
    const dataGame = funcCreateDataGame();
    console.log(`Question: ${car(dataGame)}`);
    const answer = readlineSync.question('Your answer: ');

    if (!isCorrectAnswer(answer, cdr(dataGame))) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${cdr(dataGame)}".`);
      console.log(`Let's try again, ${player} !`);
      return 0;
    }
    console.log('Correct!');
    return callGame(counter - 1);
  };

  callGame(countGames);
};

export default main;
