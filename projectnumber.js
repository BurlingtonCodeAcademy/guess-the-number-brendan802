const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

async function start() {
    let maxValue
    let rangeQuestion= await ask("Would you like to extend the number range?") 
    
    if (rangeQuestion==='yes'||rangeQuestion==='yea') {
        rangeQuestion=await ask ('What range would you like to set?')
    }
   
    var extendedRange=parseInt(rangeQuestion)
    
    if ( extendedRange>1) {
        maxValue= extendedRange
    }
    
    else {
        maxValue=100
    }

    let minValue=1
    let question = await ask ("Let's play a game, are you thinking of a number between 1 -" + maxValue + '?')
    
    while (question === 'no') {
        question = await ask ('Then you should get one please, come back when you do.')
    }
    let guessCounter=0
    var guessArray=[]
    while (question === 'yes' || question=== 'yea') {
      //check if valid range min=max=cheat  
        let guess= Math.floor((maxValue+minValue) / 2)
       
        {let first = await ask('Is your number greater, less than , or equal to' + ' ' + guess + '? ')
        
        guessArray.push(guess) 
        if (guessArray===guess){
            console.log('same guess')
        }
        
        console.log('Hmmm...' + first + " " + "you say.")
        
        if (first === 'greater') {
            minValue = guess
            
        }
       
        else if (first === 'less than' || first=== 'less ') {
            maxValue = guess
            
        }
        guessCounter++
       
        if (guessCounter>=9) {
            console.log("You've reached the max number of guesses.")
            process.exit()
        }
        
        else if (first === 'equal to' || first ==='equal') {
            response=await ask ("I thought I would win, better luck next time!")
            process.exit()
        }
        
        //Cheat Detector- Given a higher/lower response contradicts an earlier response


        //let second = await ask('Is your number greater or less than 75?')
        
        //  first = await ask('Is your number greater or less than ' + guess + '?')

        }
           
        }
        
        }

start()

