import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const generateProgression = () => {
  const numbers = [];
  const step = getRandomIntInclusive(2, 5);
  const indexOfHiddenNumber = getRandomIntInclusive(0, 9);
  for (let i = getRandomIntInclusive(1, 20); numbers.length < 10; i += step) {
    numbers.push(i);
  }
  const hiddenNumber = numbers[indexOfHiddenNumber];
  numbers[indexOfHiddenNumber] = '..';
  const numbersStr = numbers.join(' ');
  return [numbersStr, hiddenNumber];
};

const generateRoundofProgressionGame = () => {
  const [question, rightAnswer] = generateProgression();
  return [question, `${rightAnswer}`];
};

const playProgressionGame = () => {
  const progressionGameDescription = 'What number is missing in the progression?';
  playGames(progressionGameDescription, generateRoundofProgressionGame);
};

export default playProgressionGame;
