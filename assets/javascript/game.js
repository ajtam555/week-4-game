// Game
$(document).ready(function(){

	// Call initialize function to start game
	carGame.initialize();

		$('#r8').on("click", function(){
			carGame.r8(carGame.r8_num);
		});

		$('#huracan').on("click", function(){
			carGame.huracan(carGame.huracan_num);
		});

		$('#gt4').on("click", function(){
			carGame.gt4(carGame.gt4_num);
		});

		$('#nsx').on("click", function(){
			carGame.nsx(carGame.nsx_num);
		});

		// Check if 
		if(!carGame.done) {
			
			if(carGame.total_score === carGame.target){
				$('#total-score').html(carGame.total_score);
				carGame.done = true;
			}
			else if(carGame.total_score > carGame.target){
				$('#total-score').html(carGame.total_score);
			}
			else if(carGame.total_score != carGame.target){
				$('#total-score').html(carGame.total_score);
			}
		}
	});

// Game Object
var carGame = {

	wins: 0,
	losses: 0,
	r8_num: 0,
	huracan_num: 0,
	gt4_num: 0,
	nsx_num: 0,
	total_score: 0,
	done: false,

	initialize: function() {

		// Set random target number
		var target = Math.floor(Math.random() * 102 + 19);

		// Display target number
		$('#target').html(target);
		console.log(target + " target");

		// Display wins and losses count
		$('#wins').html('<p id="wins">Wins: ' + carGame.wins + '</p>');
		$('#loss').html('<p id="wins">Losses: ' + carGame.losses + '</p>');

		// Display total score for current game
		$('#total-score').html(carGame.total_score);

		// Set random car numbers
		r8_num = Math.floor(Math.random() * 12 + 1);
		console.log(r8_num + " r8");

		huracan_num = Math.floor(Math.random() * 12 + 1);
		console.log(huracan_num + " huracan");

		gt4_num = Math.floor(Math.random() * 12 + 1);
		console.log(gt4_num + " gt4");

		nsx_num = Math.floor(Math.random() * 12 + 1);
		console.log(nsx_num + " nsx");
	},

	r8: function(r8_num) {
		carGame.total_score = carGame.r8_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);
		console.log("r8 function");
		console.log(carGame.total_score);
	},

	huracan: function(huracan_num) {
		carGame.total_score = carGame.huracan_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);
		console.log("huracan function");
		console.log(carGame.total_score);
	},

	gt4: function(gt4_num) {
		carGame.total_score = carGame.gt4_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);
		console.log("gt4 function");
		console.log(carGame.total_score);
	},

	nsx: function(nsx_num) {
		carGame.total_score = carGame.nsx_num + carGame.total_score;
		$('#total-score').html(carGame.total_score);
		console.log("nsx function");
		console.log(carGame.total_score);
	}

}






