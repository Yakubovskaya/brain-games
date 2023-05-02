import getRandomInt from '../get_random_int.js';
import playGames from '../index.js';

const minNum = 1;
const maxNum = 50;

const isEven = (num) => (num % 2 === 0);

const generateRoundofEvenGame = () => {
  const number = getRandomInt(minNum, maxNum);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [`${number}`, rightAnswer];
};

const playEvenGame = () => {
  const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGames(evenGameDescription, generateRoundofEvenGame);
};

export default playEvenGame;
