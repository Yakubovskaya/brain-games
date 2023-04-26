import readlineSync from 'readline-sync';

export default function playGames(rulesOfGameStr, generateGame) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let correct = 0;
  console.log(`Hello, ${userName}!`);
  console.log(rulesOfGameStr);
  while (correct < 3) {
    const [question, rightAnswer] = generateGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
