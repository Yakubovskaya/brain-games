import readlineSync from 'readline-sync';
import getGreetingandUserName from './greeting.js';

const playGames = (description, generateGame) => {
  const userName = getGreetingandUserName();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = generateGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGames;
