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
    let question = await ask("Let's play a game, are you thinking of a number between 1-100? ")
    
    
    while (question === 'no') {
        question = await ask('Then you should get one please, come back when you do.')
    }
    
    while (question === 'yes') {
        let guess= Math.floor((maxValue+minValue) / 2)
        {let first = await ask('Is your number greater, less than , or equal to' + ' ' + guess + '? ')
        if (first==='equal to'){
            response=await ask ("Huzahhhh! I am, and always will be the best.")
        }
        
        
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
        


    }}

start()

//write logic that tells if minvalue has become greater than max value
//