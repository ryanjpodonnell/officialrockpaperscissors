(function(root) {
	var RPS = root.RPS = ( root.RPS || {} );

	var Game = RPS.Game = function(options) {
		this.socket = options.socket;
		this.player = options.player;
    this.state = { red: "rock", blue: "rock" };
    
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
          color === "red" ? game.state.red = "rock" : game.state.blue = "rock";
          $("#" + color + "-paper").css("display", "none");
          $("#" + color + "-scissors").css("display", "none");
          $("#" + color + "-rock").css("display", "inline");
        }
        else if (data.choice === "Paper") {
          color === "red" ? game.state.red = "paper" : game.state.blue = "paper";
          $("#" + color + "-rock").css("display", "none");
          $("#" + color + "-scissors").css("display", "none");
          $("#" + color + "-paper").css("display", "inline");
        }
        else {
          color === "red" ? game.state.red = "scissors" : game.state.blue = "scissors";
          $("#" + color + "-rock").css("display", "none");
          $("#" + color + "-paper").css("display", "none");
          $("#" + color + "-scissors").css("display", "inline");
        }
      });
    }
  };
})(this);