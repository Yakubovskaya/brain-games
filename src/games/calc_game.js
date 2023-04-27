import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const generateRoundofCalcGame = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  const operator = operators[index];
  const firstNum = getRandomIntInclusive(10, 20);
  const secondNum = getRandomIntInclusive(1, 9);
  const question = `${firstNum} ${operator} ${secondNum}`;
  let rightAnswer;
  switch (index) {
    case 0: rightAnswer = firstNum + secondNum; break;
    case 1: rightAnswer = firstNum - secondNum; break;
    case 2: rightAnswer = firstNum * secondNum; break;
    case 3: rightAnswer = firstNum / secondNum; break;
    // no default
  }
  return [question, `${rightAnswer}`];
};

const playCalcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  playGames(calcGameDescription, generateRoundofCalcGame);
};

export default playCalcGame;
