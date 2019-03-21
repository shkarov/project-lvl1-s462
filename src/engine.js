import { car, cdr } from 'hexlet-pairs';
import {
  welcome, ruleOfGame, getPlayerName, hello, question, getPlayerAnswer, isCorrectAnswer,
  incorrectAnswer, correctAnswer, congratulation,
} from './lib';

const countGames = 3;

const main = (ruleGame, funcCreateDataGame) => {
  welcome();
  ruleOfGame(ruleGame);
  const player = getPlayerName();
  hello(player);

  const callGame = (counter) => {
    if (counter === 0) {
      congratulation(player);
      return 0;
    }
    const dataGame = funcCreateDataGame();
    question(car(dataGame));
    const answer = getPlayerAnswer();

    if (!isCorrectAnswer(answer, cdr(dataGame))) {
      incorrectAnswer(answer, cdr(dataGame), player);
      return 0;
    }
    correctAnswer();
    return callGame(counter - 1);
  };

  callGame(countGames);
};

export default main;
