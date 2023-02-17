import readlineSync from 'readline-sync';

export default function sayHello() {
  const userName = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${userName}!`;

  console.log(greeting);
}
