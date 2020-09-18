const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

async function start() {
    let minValue=1
    let maxValue=100
    let question = await ask("Let's play a game, do you have a number between 1-100? ")

    while (question === 'no') {
        question = await ask('then get one')
    }
    while (question === 'yes') {
        let guess= Math.floor((maxValue+minValue) / 2)
        let first = await ask('is your number greater or less than ' + guess + '? ')
        //let second = await ask('Is your number greater or less than 75?')
        console.log('Hmmm...' + first + " " + "you say.")

        if (first === 'greater') {
            minValue= guess
          //  first = await ask('Is your number greater or less than ' + guess + '?')

        }

        if (first === 'less than') 
            maxValue=guess
          //  first = await ask('is your number greater or less than ' + guess + '?')
           
        }
        


    }

start()

//write logic that tells if minvalue has become greater than max value
//