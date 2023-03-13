import readlineSync from 'readline-sync';

export default function playGames(rules, generator) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  let correct = 0;
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  while (correct < 3) {
    const questionAndAnswer = generator();
    console.log(`Question: ${questionAndAnswer[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(questionAndAnswer[1])) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer[1]}'\nLet's try again, ${userName}!`);
      break;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
