import getRandomInt from '../get_random_int.js';
import playGames from '../index.js';

const minNum = 1;
const maxNum = 20;

const isPrime = (num) => {
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
};

const generateRoundofPrimeGame = () => {
  const number = getRandomInt(minNum, maxNum);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [`${number}`, rightAnswer];
};

const playProgressionGame = () => {
  const primeGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGames(primeGameDescription, generateRoundofPrimeGame);
};

export default playProgressionGame;
