import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { welcome, ruleOfGame, helloPlayer } from './lib';

const countGames = 3;

const main = (ruleGame, funcCreateDataGame) => {
  welcome();
  ruleOfGame(ruleGame);
  const player = readlineSync.question('May I have your name? ');
  helloPlayer(player);

  const callGame = (counter) => {
    if (counter < 1) {
      return true;
    }
    const dataGame = funcCreateDataGame();
    console.log(`Question: ${car(dataGame)}`);
    const answer = readlineSync.question('Your answer:');
    if (answer !== `${cdr(dataGame)}`) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(dataGame)}.`);
      console.log(`Let's try again, ${player} !`);
      return false;
    }
    console.log('Correct!');
    return callGame(counter - 1);
  };

  if (callGame(countGames)) {
    console.log(`Congratulations, ${player} !`);
  }
};

export default main;
