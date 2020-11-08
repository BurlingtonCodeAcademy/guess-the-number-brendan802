//-----------------------------------------------READLINE LIBRARY---------------------------------------------//
const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
// ASK FUNCTION
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
//-----------------------------------------------NUMBER GENERATOR FUNCTION---------------------------------------------//
function randomInt(minValue, maxValue) {
  return Math.floor((Math.random() / 2) * (maxValue - minValue + 1) + minValue);
}

//function start
async function computerAsk() {
  //-----------------------------------------------EXTENDED RANGE---------------------------------------------//
  let rangeQuestion = await ask(
    "Hi there, would you like to extend the number range?"
  );
  if (rangeQuestion === "yes" || "yea")
    rangeQuestion = await ask("What range would you like to set?");
    //if player wants to extend the range, set the extended number to the parse int of their answer
  let extendedRange = parseInt(rangeQuestion);
  //just an error check for a real number larger than 1
  if (extendedRange > 1) {
    maxValue = extendedRange;
  } else {
      //if not larger than one just use 100
    maxValue = 100;
  }
  //set minvalue to hard 1
  let minValue = 1;
  //-----------------------------------------------EXTENDED RANGE END---------------------------------------------//


  //-----------------------------------------------GAME START---------------------------------------------//
//game intro
  let question = await ask(
    `Let's play a game, where I think of a number between ${minValue} and  ${maxValue}, you try to guess, want to play?`
  );//if they dont want to play game ends
  if (question === "no") {
    question = await ask("Ok then, will be here if you change your mind.");
    process.exit();
  }
  //question count tracker
  let firstCounter = 0;
  //computer number generated from randomInt function
  let computerNum = randomInt(minValue, maxValue);
  if (question === "yes" || question === "yea") {
      //console log to check accuracy of logic
    console.log(computerNum);
    //set variable to their guess, variable is guess
    let guess = await ask("What is your guess?");
    //have to parseint the string
    guess = parseInt(guess);
    //track guess in counter
    firstCounter++;
    //if guess is not the computer num
    while (guess !== computerNum) {
      let nextGuess = await ask(" Next guess?");
      nextGuess = parseInt(nextGuess);
      //if guess is lower, then tell playerto try a higher number
      if (nextGuess < computerNum) {
        firstCounter++;
        console.log(" Nope that's too low, try a higher number.");
      }//if guess too high, tell player to try a higher number
      if (nextGuess > computerNum) {
        firstCounter++;
        console.log("Nope! Too high, try a lower number");
      }//if player guesses 9 times, game over
      if (firstCounter >= 9) {
        console.log(
          "You've reached the maximum number of guesses dear chap, carry on."
        );20
        process.exit();
      } //if player guesses computer number, they win
      else if (computerNum == nextGuess) {
        console.log("You got it! Great game!");
        process.exit();
      }
    }
  }
}
computerAsk();
