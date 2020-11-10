//readLine Library import
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

//ask function declaration
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

//function start
async function start() {
  //------------------------------------EXTENDED RANGE SCRIPT AT START-------------------------------------------------------
  //set guess counter
  let guessCounter = 0;
  //declare maxvalue variable
  let maxValue;
  //min value remains 1
  let minValue = 1;

  //set secret number variable equal to await ask
  let secretNumber = await ask("What is your number?\n... I won't cheat....");
  // console.log('You replied' + secretNumber)
  //set rangequestion equal to await ask welcome question
  let rangeQuestion = await ask(
    "Would you like to extend the number range by giving a outermost range number?"
  );
  //if yes, extend the number range
  if (rangeQuestion === "yes" || rangeQuestion === "yea") {
    rangeQuestion = await ask("What range would you like to set?");
  }
  //creates extended range variable, which is the parse int of rangequestion response
  let extendedRange = parseInt(rangeQuestion);
  //if they choose a number greater than 1, reset maxvalue to their new input
  if (extendedRange > 1) {
    maxValue = extendedRange;
  }
  //if not, maxvalue stays at 100
  else {
    maxValue = 100;
  }

  //----------------------------------------START OF MAIN GAME SCRIPT-------------------------------------------------------
  //start question, ask if player has  number, if they respond no then process exit
  let question = await ask(
    `Let's play a game, are you thinking of a number between ${minValue} and ${maxValue}? `
  );
  while (question === "no") {
    question = await ask(
      "Then you should get one please, come back when you do."
    );
    process.exit();
  }
  //if reponse to question is yes...
  while (question === "yes" || question === "yea") {
    //guess is random generated number between 1-100
    let guess = Math.floor((maxValue + minValue) / 2);
    //guess counter track
    guessCounter++;
    //set first variable to equal, greater/less than/equal to question
    let first = await ask(
      `Is your number greater, less than , or equal to ${guess} ? `
    );
    console.log(`Hmmm... ${first} you say...`);
    //if number is higher
    if (first === "greater" || first === "greater than") {
      minValue = guess + 1;
    } //if player responds less than, computer re-guesses w/ modified number being
    if (first === "less than" || first === "less") {
      maxValue = guess - 1;
    }
    //condition if players response says equal to, computer wins
    if (first === "equal to" || first === "equal") {
      response = await ask("I thought I would win, better luck next time!");
      process.exit();
    } //guess counter, player wins if computer has to guess x number of times
    if (guessCounter >= 9) {
      console.log(
        "It can't be! I've reached the maximum number of guesses, you have won."
      );
      process.exit();
    }
    //cheat detector logic, if player does not admit when computer has guessed their number
    else if (secretNumber == guess) {
      response = await ask(
        " You blasphemous cheater!!! Come back when you want to play fair!"
      );
      process.exit();
    }
  }
}
start();
