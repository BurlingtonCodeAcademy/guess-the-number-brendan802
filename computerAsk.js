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
    let maxValue
    let rangeQuestion= await ask("Hi there, would you like to extend the number range?") 
    if (rangeQuestion==='yes'||'yea') {
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
    let question = await ask ("Let's play a game, where I think of a number between 1 and" +" " + maxValue + ", you try to guess, want to play?")
    
    
    while (question === 'no') {
        question = await ask ("Ok then, will be here if you change your mind.")
    }
    let guessCounter=0
    var guessArray=[]
    while (question === 'yes' || question=== 'yea') {
      
        let guess= Math.floor((maxValue+minValue) / 2)
        {let first = await ask('What is your guess?')
        guessArray.push(guess) 
        if (guessArray===guess){
            console.log('same guess')
        }

        console.log('guessArray', guessArray)
        
        console.log('Hmmm...' + first + " " + "you say.")
        

        if (first === 'greater') {
            minValue = guess
            console.log('minValue', minValue)
        }
    
            
        else if (first === 'less than' || first=== 'less ') {
            maxValue = guess
            console.log('maxValue', maxValue)
        
        }
        
        guessCounter++
        console.log('guessCounter', guessCounter)
        if (guessCounter>=9) {
            console.log("You've reached the max number of guesses.")
            process.exit()
        }
        else if (first === 'equal to') {
            response=await ask ("Huzahhhh! I am, and always will be, the best.")
            process.exit()
        }
        
   

        }
           
        }
        
        }

start()
