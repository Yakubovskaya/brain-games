import getRandomInt from '../get_random_int.js';
import playGames from '../index.js';

const generateProgression = () => {
  const numbers = [];
  const stepMinNum = 2;
  const stepMaxNum = 5;
  const startMinNum = 1;
  const startMaxNum = 20;
  const step = getRandomInt(stepMinNum, stepMaxNum);
  for (let i = getRandomInt(startMinNum, startMaxNum); numbers.length < 10; i += step) {
    numbers.push(i);
  }
  return numbers;
};

const generateRoundofProgressionGame = () => {
  const minNum = 0;
  const maxNum = 9;
  const indexOfHiddenNumber = getRandomInt(minNum, maxNum);
  const progression = generateProgression();
  const hiddenNumber = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';
  const progressionStr = progression.join(' ');
  return [progressionStr, `${hiddenNumber}`];
};

const playProgressionGame = () => {
  const progressionGameDescription = 'What number is missing in the progression?';
  playGames(progressionGameDescription, generateRoundofProgressionGame);
};

export default playProgressionGame;
