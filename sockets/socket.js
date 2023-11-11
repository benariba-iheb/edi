//create web socket
var io = require('socket.io')(http);
//handle imports
var express = require('express');
var app = express();
var http = require('http').Server(app);


//serve static files
app.use(express.static('public'));
//define routes

app.get('', function(req, res){
     res.sendFile(__dirname + '/index.html');
});
var socket = io.connect('http://localhost:3000');


// Emit events 
btn.addEventListener('click', function(){
     socket.emit('chat', {
          message: message.value,
          handle: handle.value
     });
     message.value = "";
});

