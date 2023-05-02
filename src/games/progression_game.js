import getRandomInt from '../get_random_int.js';
import playGames from '../index.js';

const startMinNum = 1;
const startMaxNum = 20;
const stepMinNum = 2;
const stepMaxNum = 5;
const minIndex = 0;
const maxIndex = 9;

const generateProgression = (startNumber, step) => {
  const numbers = [];
  for (let i = startNumber; numbers.length < 10; i += step) {
    numbers.push(i);
  }
  return numbers;
};

const generateRoundofProgressionGame = () => {
  const startNum = getRandomInt(startMinNum, startMaxNum);
  const step = getRandomInt(stepMinNum, stepMaxNum);
  const progression = generateProgression(startNum, step);
  const hiddenNumberIndex = getRandomInt(minIndex, maxIndex);
  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';
  const progressionStr = progression.join(' ');
  return [progressionStr, `${hiddenNumber}`];
};

const playProgressionGame = () => {
  const progressionGameDescription = 'What number is missing in the progression?';
  playGames(progressionGameDescription, generateRoundofProgressionGame);
};

export default playProgressionGame;
