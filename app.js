var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000, function() {
	console.log('server online');
});

app.use(express.static('public'));


var players = [];
io.sockets.on('connection', function(socket) {
	var player = socket.id;
	players.push(player);
	var id = players.indexOf(player)
  
  socket.on('disconnect', function() {
    // players.splice(id, 1);
    players.length = 0;
  });
  
  socket.emit('receive', { id: id });
  
	if (players.length === 2) { 
		io.sockets.emit('startGame', { message: 'Have fun!', players: players });
	}

  socket.on('alertChoice', function(data) {
    io.sockets.emit('showChoice', { choice: data.choice, player: data.player });
  });
});