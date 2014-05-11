(function(root) {
	var RPS = root.RPS = ( root.RPS || {} );

	var Game = RPS.Game = function(options) {
		this.socket = options.socket;
		this.player = options.player;
    
    var game = this;
    
    $('.choice').on('click', function(event) {
      event.preventDefault();      
			if (game.socket) {
				game.socket.emit('alertChoice', 
          { choice: event.currentTarget.innerText, player: game.player });	
			}
		});
    
    if (this.socket) {
      this.socket.on('showChoice', function(data) {
        var color = (data.player === 0 ? "red" : "blue" );
        if (data.choice === "Rock") {
          $("#" + color + "-choice").html('<img src="/images/' + color + '_rock.jpg"></img>');
        }
        else if (data.choice === "Paper") {
          $("#" + color + "-choice").html('<img src="/images/' + color + '_paper.jpg"></img>');
        }
        else {
          $("#" + color + "-choice").html('<img src="/images/' + color + '_scissors.jpg"></img>');
        }
      });
    }
    
  };
})(this);