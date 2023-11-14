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







//error handling
app.all('*' , (req , res) => {
     res.status(404)
     console.log('this is from app.all')
     if(req.accepts('html')){
          res.sendFile('sent an html file')
     }
     else if(req.accepts('json')){
          res.json({error : "404 not found"})
          console.log('sent an json file')
     }
     else{
          res.type('txt').send('404 not found')
          console.log('sent an text file')
     }
     end_connection()
})


app.listen(PORT , () =>{
     console.log(`server running on port ${PORT}`)
})
