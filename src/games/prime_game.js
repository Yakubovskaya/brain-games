import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= num / 2) {
    if (num % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
}

function generateRoundofPrimeGame() {
  const number = getRandomIntInclusive(1, 20);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, rightAnswer];
}

export default function playProgressionGame() {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGames(primeGameDescription, generateRoundofPrimeGame);
}
