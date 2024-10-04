const fs = require('fs'); 
fs.writeFileSync('sample.txt', 'Hello World!', (err) => { 
    if (err) throw err; 
    console.log('File created successfully!'); 
}); 
fs.readFile('sample.txt', 'utf8', (err, data) => { 
    if (err) throw err; 
    console.log('File Data:', data); 
}); 
fs.unlink('sample.txt', (err) => { 
    if (err) throw err; 
    console.log('File deleted successfully!');}); 
