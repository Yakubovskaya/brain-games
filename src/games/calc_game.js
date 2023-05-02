import getRandomInt from '../get_random_int.js';
import playGames from '../index.js';

const minNum = 1;
const maxNum = 20;

const calculateExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRoundofCalcGame = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  const operator = operators[index];
  const firstOperand = getRandomInt(minNum, maxNum);
  const secondOperand = getRandomInt(minNum, maxNum);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = calculateExpression(firstOperand, secondOperand, operator);
  return [question, `${rightAnswer}`];
};

const playCalcGame = () => {
  const calcGameDescription = 'What is the result of the expression?';
  playGames(calcGameDescription, generateRoundofCalcGame);
};

export default playCalcGame;
