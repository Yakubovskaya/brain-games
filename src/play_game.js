import readlineSync from 'readline-sync';
import getAnswer from './get_answer.js';
import showGreeting from './show_greeting.js';

export default function playGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  showGreeting(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  getAnswer(userName);
}
