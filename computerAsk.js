//computer stores number between1-100
//computer asks for a number, new variable
//computer checks that nunmber with chosen number, to high to low equal to
//user entered numbers will come in as strings, need to convert these back to numbers before comparing

const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

async function start() {

    let maxValue = 100
    let randomInteger=randomInteger
    let minValue = 1

randomInteger(minValue, maxValue)
    let range = max - min + 1;
    return min + Math.floor(Math.random() * range)
}
    {
    let question = await ask("Let's play a game, would you like to guess my secret number between 1 and 100?")
    console.log(question)
    
    {
while (question === 'no') {
    question = await ask('Okay, another time then.')
    }}  

Math.floor(guess)
let guessCounter = 0
var guessArray = []
while (question === 'yes' || question === 'yea')

{
    //check if valid range min=max=cheat  

    
        let first = await ask('What is your guess?') 
        
        guessArray.push(first)
        if (guessArray === first) {
            console.log('same guess')
        }

        console.log('guessArray', guessArray)

        console.log('Hmmm...' + first + " " + "you say.")


        if (first < randomInteger) {
            console.log("Higher")
        }


        else if (first > randomInteger) {
            console.log('Lower')

        }
        guessCounter++
        console.log('guessCounter', guessCounter)
        if (guessCounter >= 7) {
            console.log("You've reached the max number of guesses.")
            process.exit()
        }
        else if (first === numberValue) {
            response = await ask("You have won!")
            process.exit()
        }
    }


start()}