//TCP Server Example: 
const net = require('net'); 
const server = net.createServer((socket) => { 
    console.log('Client connected'); 
     socket.on('data', (data) => { 
        console.log('Received from client:', data.toString()); 
        socket.write('Hello from server!'); 
    }); 
 
    socket.on('end', () => { 
        console.log('Client disconnected'); 
    }); 
}); 
server.listen(8080, () => { 
    console.log('Server is listening on port 8080'); 
});
 
//TCP Client Example: 
const net = require('net'); 
const client = net.createConnection({ port: 8080 }, () => { 
    console.log('Connected to server'); 
    client.write('Hello from client!'); 
}); 
client.on('data', (data) => { 
    console.log('Received from server:', data.toString()); 
    client.end(); 
}); 
 
client.on('end', () => { 
    console.log('Disconnected from server'); 
}); 
