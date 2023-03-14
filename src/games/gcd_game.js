import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

function generateRoundofGcdGame() {
  let firstNumber = getRandomIntInclusive(1, 50);
  let secondNumber = getRandomIntInclusive(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  const rightAnswer = firstNumber;
  return [question, rightAnswer];
}

export default function playGcdGame() {
  const rulesOfGcdGame = 'Find the greatest common divisor of given numbers.';
  playGames(rulesOfGcdGame, generateRoundofGcdGame);
}
