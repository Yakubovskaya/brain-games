import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

function generateRoundofProgressionGame() {
  const numbers = [];
  const step = getRandomIntInclusive(2, 5);
  const indexOfHiddenNumber = getRandomIntInclusive(0, 9);
  let strOfNumbers = '';
  for (let i = getRandomIntInclusive(1, 20); numbers.length < 10; i += step) {
    numbers.push(i);
  }
  const hiddenNumber = numbers[indexOfHiddenNumber];
  numbers[indexOfHiddenNumber] = '..';
  strOfNumbers = numbers.join(' ');
  const question = `${strOfNumbers}`;
  const rightAnswer = hiddenNumber;

  return [question, rightAnswer];
}

export default function playProgressionGame() {
  const rulesOfProgressionGame = 'What number is missing in the progression?';
  playGames(rulesOfProgressionGame, generateRoundofProgressionGame);
}
