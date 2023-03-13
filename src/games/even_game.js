import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

function generateRoundofEvenGame() {
  const number = getRandomIntInclusive(1, 50);
  const question = `${number}`;
  let rightAnswer;
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [question, rightAnswer];
}

export default function playEvenGame() {
  const rulesOfEvenGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGames(rulesOfEvenGame, generateRoundofEvenGame);
}
