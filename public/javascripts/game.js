(function(root) {
	var RPS = root.RPS = ( root.RPS || {} );

	var Game = RPS.Game = function(options) {
		this.socket = options.socket;
		this.player = options.player;
    
    var game = this;
    
    $('.clicky').on('click', function(event) {
			if (game.socket) {
				game.socket.emit('temp');	
			}
		});
  };
})(this);