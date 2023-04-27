import getRandomIntInclusive from '../get_random_int.js';
import playGames from '../index.js';

const calculateExpression = (firstNum, secondNum, index) => {
  let answer;
  switch (index) {
    case 0: answer = firstNum + secondNum; break;
    case 1: answer = firstNum - secondNum; break;
    case 2: answer = firstNum * secondNum; break;
    case 3: answer = firstNum / secondNum; break;
    // no default
  }
  return answer;
};

const generateRoundofCalcGame = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  const operator = operators[index];
  const firstOperand = getRandomIntInclusive(10, 20);
  const secondOperand = getRandomIntInclusive(1, 9);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = calculateExpression(firstOperand, secondOperand, index);
  return [question, `${rightAnswer}`];
};

const playCalcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  playGames(calcGameDescription, generateRoundofCalcGame);
};

export default playCalcGame;
