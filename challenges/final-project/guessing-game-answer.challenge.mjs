/**
 * Your challenge is to create a one-player guessing game.  The program you write will
 * randomly choose a number between 1 and 100 and the user will try to guess the number
 * in a certain number of trys.
 * 
 * The play of the game should flow like this:
 * 
 * User picks the number of attempts s/he gets.
 * User is asked to guess the number.
 * The game tells the user if they need to guess "higher" or "lower".
 * The user guesses again.
 * The game tells the user if they need to guess "higher" or "lower".
 * The user guesses again.
 * ...
 * This continues until either 1) the user guesses the number and wins or
 * 2) the number of attempts runs out and the user loses.
 * 
 * ***********************************************************************************************
 * 
 * There are two pre-built functions below that you will use in your game below.
 * The first is an "askForNumber" function that when used will prompt the user to enter some input.
 * You can capture that input in a variable that you can then use in your game.
 * 
 * For example:
 * 
 * let userInput = await askForNumber('Hey user, enter some input!');
 * 
 * (Don't worry about what the "await" does above; it's needed to allow the ask function to work)
 * 
 * You will see that the second line of the game is written for you below, which actually uses the
 * "askForNumber" function to receive the number of attempts from the user and store it in a variable.
 * 
 * The second function called "closeInput" is just needed as the last line in the "playGame" function
 * so that the game ends correctly.  It is already in place in the "playGame" function and need not
 * be touched.
 * 
 * You don't not have to understand the code involved in either of these functions - they just work. :)
 * 
 * ***********************************************************************************************
 * 
 * The first two lines of the game are already written for you.  The first line creates a random secret
 * number and the second line asks the user for the number of attempts and stores it in a variable.
 * All of the code that you will write should go after that where the "ALL YOUR CODE GOES HERE" comment
 * is written.
 * 
 * Note that if for some reason the game is running and it won't stop you can press Control + C to stop it.
 */

/**
 * DO NOT TOUCH - BEGIN
 * 
 * Do not modify any code between this line and the DO NOT TOUCH - END line below 
 */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForNumber(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(parseInt(answer));
    });
  });
}

function closeInput() {
  rl.close();
}

/**
 * 
 * Do not modify any code between this line and the DO NOT TOUCH - BEGIN line above
 * 
 * DO NOT TOUCH - END
 */

async function playGame() {
  
    // The line below creates a new random secret number each game
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const numberOfAttempts = await askForNumber('Welcome to the guessing game! How many attempts would you like to have? ');

    let guess = 0;
    
    let win = false;
    for (let i = 0; i < numberOfAttempts; i++) {
        guess = await askForNumber('Pick your number! ');

        if (guess === secretNumber) {
            win = true;
            i = numberOfAttempts;
        } else if (guess > secretNumber) {
            console.log('Lower!');
        } else {
            console.log('Higher!')
        }
    }

    if (win) {
       console.log('You win!');
    } else {
       console.log ('Try again!');
    }

  // Don't touch this line - it ends the game appropriately
  closeInput();
}

// Don't touch this line - it actually calls the function to start the game
playGame();
