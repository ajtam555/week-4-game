// Game
$(document).ready(function(){

	// Call initialize function to start game
	carGame.initialize();

		$('#r8').on("click", function(){
			carGame.r8();
		});

		$('#huracan').on("click", function(){
			carGame.huracan();
		});

		$('#gt4').on("click", function(){
			carGame.gt4();
		});

		$('#nsx').on("click", function(){
			carGame.nsx();
		});
});

// Game Object
var carGame = {

	wins: 0,
	losses: 0,
	r8_num: 0,
	huracan_num: 0,
	gt4_num: 0,
	nsx_num: 0,
	target: 0,
	total_score: 0,
	done: false,

	initialize: function(){

		// Set random target number
		this.target = Math.floor(Math.random() * 102 + 19);

		// Display target number
		$('#target').html(carGame.target);

		// Display wins and losses count
		$('#wins').html('<p id="wins">Wins: ' + carGame.wins + '</p>');
		$('#loss').html('<p id="loss">Losses: ' + carGame.losses + '</p>');

		// Display total score for current game
		$('#total-score').html(carGame.total_score);

		// Set random car numbers
		this.r8_num = Math.floor(Math.random() * 12 + 1);

		this.huracan_num = Math.floor(Math.random() * 12 + 1);

		this.gt4_num = Math.floor(Math.random() * 12 + 1);

		this.nsx_num = Math.floor(Math.random() * 12 + 1);
	},

	reset: function(){

		this.total_score = 0;

		// Set random target number
		this.target = Math.floor(Math.random() * 102 + 19);

		// Display target number
		$('#target').html(carGame.target);

		// Display total score for current game
		$('#total-score').html(this.total_score);

		// Set random car numbers
		this.r8_num = Math.floor(Math.random() * 12 + 1);

		this.huracan_num = Math.floor(Math.random() * 12 + 1);

		this.gt4_num = Math.floor(Math.random() * 12 + 1);

		this.nsx_num = Math.floor(Math.random() * 12 + 1);
	},

	r8: function(){
		carGame.total_score = carGame.r8_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);

		if(carGame.total_score === carGame.target){
			this.wins++;
			$('#wins').html('<p id="wins">Wins: ' + this.wins + '</p>');
			$('#wins-loss').prepend('<p>"You won!!"</p>');
			carGame.reset();

		} else if(carGame.total_score > carGame.target) {
			this.losses++;
			$('#loss').html('<p id="loss">Losses: ' + this.losses + '</p>');
			$('#wins-loss').prepend('<p>"You lost!!"</p>');
			carGame.reset();
		}
	},

	huracan: function(){
		carGame.total_score = carGame.huracan_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);

		if(carGame.total_score === carGame.target){
			console.log("asdfadf");
			this.wins++;
			$('#wins').html('<p id="wins">Wins: ' + this.wins + '</p>');
			$('#wins-loss').prepend('<p>You won!!</p>');
			carGame.reset();

		} else if(carGame.total_score > carGame.target) {
			this.losses++;
			$('#loss').html('<p id="loss">Losses: ' + this.losses + '</p>');
			$('#wins-loss').prepend('<p>"You lost!!"</p>');
			carGame.reset();
		}
	},

	gt4: function(){
		carGame.total_score = carGame.gt4_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);

		if(carGame.total_score === carGame.target){
			this.wins++;
			$('#wins').html('<p id="wins">Wins: ' + this.wins + '</p>');
			$('#wins-loss').prepend('<p>"You won!!"</p>');
			carGame.reset();
		
		} else if(carGame.total_score > carGame.target) {
			this.losses++;
			$('#loss').html('<p id="loss">Losses: ' + this.losses + '</p>');
			$('#wins-loss').prepend('<p>"You lost!!"</p>');
			carGame.reset();
		}
	},

	nsx: function(){
		carGame.total_score = carGame.nsx_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);

		if(carGame.total_score === carGame.target){
			this.wins++;
			$('#wins').html('<p id="wins">Wins: ' + this.wins + '</p>');
			$('#wins-loss').prepend('<p>"You won!!"</p>');
			carGame.reset();

		} else if(carGame.total_score > carGame.target) {
			this.losses++;
			$('#loss').html('<p id="loss">Losses: ' + this.losses + '</p>');
			$('#wins-loss').prepend('<p>"You lost!!"</p>');
			carGame.reset();
		}
	}
}







