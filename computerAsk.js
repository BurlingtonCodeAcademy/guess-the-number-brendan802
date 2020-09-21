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
    var secretNumber=parseInt(randomInt)
    function randomInt(minValue, maxValue) {
        let range = maxValue - minValue + 1; 
        return minValue + Math.floor(Math.random() * range);
      }
      
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
    let firstCounter=0
    var firstArray=[]
    if (question === 'yes' || question=== 'yea') {
          
        let first = await ask('What is your guess?')
        if (first < secretNumber) {
            minValue = guess
        }
            
        else if (first > secretNumber) {
            maxValue = first
            console.log('maxValue', maxValue)
        }
        
        
        firstArray.push(first) 
        if (firstArray===first){
            console.log('same guess')
        
        console.log('Hmmm...' + first + " " + "you say.")
        
        
        firstCounter++
        if (firstCounter>=7) {
            console.log("You've reached the max number of guesses.")
            process.exit()
        }
        else if (first === secretNumber) {
            response=await ask ("You've won!")
            process.exit()
        }
        }    
        }
        }

start()
//process exit on the no dont want to play