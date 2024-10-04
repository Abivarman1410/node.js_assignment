const readline = require('readline'); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
function checkOddOrEven() { 
    rl.question('Enter a number: ', (input) => { 
        const number = parseInt(input); 
        if (isNaN(number)) { 
            console.log('Please enter a valid number.'); 
        } else { 
            if (number % 2 === 0) { 
                console.log(`${number} is an Even Number.`); 
            } else { 
                console.log(`${number} is an Odd Number.`); 
            } 
        } 
        checkOddOrEven(); 
    }); 
} 
checkOddOrEven(); 