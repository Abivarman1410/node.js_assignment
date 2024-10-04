//Blocking code
const fs = require('fs'); 
console.log("Start Reading File..."); 
const data = fs.readFileSync('example.txt', 'utf8'); 
console.log("File Data:", data); 
console.log("End of Program."); 

//Non-Blocking code
const fs = require('fs'); 
console.log("Start Reading File..."); 
fs.readFile('example.txt', 'utf8', (err, data) => { 
    if (err) throw err; 
    console.log("File Data:", data); 
}); 
console.log("End of Program."); 