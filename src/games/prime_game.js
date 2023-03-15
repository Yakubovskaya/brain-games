import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

function isPrime(num) {
  const divider = num / 2;
  if (num <= 2 && num !== 0) {
    return 'yes';
  }
  for (let i = 2; i <= divider; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function generateRoundofPrimeGame() {
  const number = getRandomIntInclusive(1, 20);
  const question = `${number}`;
  const rightAnswer = isPrime(number);
  return [question, rightAnswer];
}

export default function playProgressionGame() {
  const rulesOfPrimeGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGames(rulesOfPrimeGame, generateRoundofPrimeGame);
}
