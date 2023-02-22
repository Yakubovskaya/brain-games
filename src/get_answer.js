import readlineSync from 'readline-sync';
import getRandomIntInclusive from './get_random_int.js';
import showQuestion from './show_question.js';
import isEven from './even_or_odd.js';

export default function getAnswer(name) {
  let correct = 0;
  let num;
  let answer;
  while (correct < 3) {
    num = getRandomIntInclusive(1, 50);
    showQuestion(num);
    answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isEven(num)) || (answer === 'no' && !isEven(num))) {
      console.log('Correct!');
      correct += 1;
    } else if ((answer === 'no' && isEven(num)) || (answer === 'yes' && !isEven(num)) || (answer !== 'yes' && answer !== 'no')) {
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    if (answer === 'no' && isEven(num)) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
    }
    if (answer === 'yes' && !isEven(num)) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
    }
    console.log(`Let's try again, ${name}!`);
  }
}
