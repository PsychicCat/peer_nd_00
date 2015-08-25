var http = require('http');
var accountBalance = require('./accountBalance.js');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(accountBalance.textOutput() + accountBalance.numOutput);
    res.end();
}).listen(3000);