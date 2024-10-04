const dns = require('dns'); 
dns.lookup('www.google.com', (err, address, family) => { 
    if (err) throw err; 
    console.log('IP Address:', address); 
    console.log('Address Family:', family); 
}); 
dns.resolve4('www.google.com', (err, addresses) => { 
    if (err) throw err; 
    console.log('IP Addresses:', addresses); 
});