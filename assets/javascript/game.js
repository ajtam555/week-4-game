// Variables

// Functions
window.onload = function() {

	// Call initialize function to start game
	carGame.initialize();

	// Call each function associated with the each id
	// Set random number 
	// $(".car").each(function() {
	// 	$('#r8').on("click", carGame.r8);
	// 	$('#huracan').on("click", carGame.huracan);
	// 	$('#gt4').on("click", carGame.gt4);
	// 	$('#nsx').on("click", carGame.nsx);
	// }

	// $('#r8').on("click", carGame.r8);
	// $('#huracan').on("click", carGame.huracan);
	// $('#gt4').on("click", carGame.gt4);
	// $('#nsx').on("click", carGame.nsx);
	// Loop through each .car class
	// $(".car").each(function(index) {
	//http://stackoverflow.com/questions/24197807/creating-a-variable-with-a-variable-in-an-each-loop-jquery
 
}	

var carGame = {

	wins: 0,
	losses: 0,
	r8_num: 0,
	huracan_num: 0,
	gt4_num: 0,
	nsx_num: 0,
	total_score: 0,

	initialize: function() {

		// Set random target number
		var targetNum = Math.floor(Math.random() * 102 + 19);

		// Display target number
		$('#target').html(targetNum);
		console.log(targetNum);

		// Display wins and losses count
		$('#wins').html('<p id="wins">Wins: ' + carGame.wins + '</p>');
		$('#loss').html('<p id="wins">Losses: ' + carGame.losses + '</p>');

		// Display total score for current game
		$('#total-score').html(carGame.total_score);

		// Set random car numbers
		r8_num = Math.floor(Math.random() * 12 + 1);
		console.log(r8_num);

		huracan_num = Math.floor(Math.random() * 12 + 1);
		console.log(huracan_num);

		gt4_num = Math.floor(Math.random() * 12 + 1);
		console.log(gt4_num);

		nsx_num = Math.floor(Math.random() * 12 + 1);
		console.log(nsx_num);

	},

	r8: function() {
		
		console.log(r8_num);
	},

	huracan: function() {
		
		console.log(huracan_num);
	},

	gt4: function() {
		
		console.log(gt4_num);
	},

	nsx: function() {
		
		console.log(nsx_num);

	}

}






