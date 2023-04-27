import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const calculateGcd = (first, second) => {
  let firstNum = first;
  let secondNum = second;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  return firstNum;
};

const generateRoundofGcdGame = () => {
  const firstNumber = getRandomIntInclusive(1, 50);
  const secondNumber = getRandomIntInclusive(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = calculateGcd(firstNumber, secondNumber);
  return [question, `${rightAnswer}`];
};

const playGcdGame = () => {
  const gcdGameDescription = 'Find the greatest common divisor of given numbers.';
  playGames(gcdGameDescription, generateRoundofGcdGame);
};

export default playGcdGame;
