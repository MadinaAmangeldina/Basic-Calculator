const readlineSync = require('readline-sync');

const userName = readlineSync.question("Enter your name: ");

console.log(`Welcome ${userName} to Basic Calculator!`);


function calculate (c) {
  let endProgram = "";
  do {
    let a = parseInt(readlineSync.question('Enter the first number: '));
    let operation = readlineSync.question('Please enter an operation you would like to perform (+, -, *, /): ');
    let b = parseInt(readlineSync.question('Enter the second number: '));
    
    if (operation === '+') {
      c = a + b;
      console.log(a + "+" + b + "=" + c)
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `);
    } else if (operation === '-') {
      c = a - b;
      console.log(a + "-" + b + "=" + c)
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `);
    } else if (operation === '*') {
      c = a * b;
      console.log(a + "*" + b + "=" + c)
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `);
    } else if (operation === '/') {
      c = a / b;
      console.log(a + "/" + b + "=" + c)
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `);
    } else {
      console.log("Please enter a number.")
      endProgram = readlineSync.question(`Would you like to continue? (Y/N): `);
    }
    
  } while (endProgram === 'Y' || endProgram ===  'Yes');
}

calculate();

console.log(`Thank you for using Basic Calculator!`);