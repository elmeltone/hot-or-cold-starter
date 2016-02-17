
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- Default Game ---*/
	function newGame(){
		    targetValue = Math.floor(Math.random(event) * 100) + 1;
			console.log(targetValue);
		};
	
		newGame();
		
	/*--- Guess ---*/
	$(".button").on('click',(function newGuess(event){
		event.preventDefault();
		
		counter = parseInt(document.getElementById('count').innerHTML,10);
		counter = counter+1;
		document.getElementById('count').innerHTML = counter.toString();
		var input = document.getElementById("userGuess").value;

		if (input == targetValue)
	  		$('#feedback').empty().append("You guessed it!"), alert("You guessed it! Nice work! Start a new game!");
		else if (input < 0 || input > 100)
			$('#feedback').empty().append("That's not right!"), alert("Please choose a number between 1 and 100!");
		else if (((input > targetValue) && (input - targetValue <= 10)) || ((input < targetValue) && (input - targetValue >= -10)))
			$('<li class="guesses">' + input + ' - Ow! Hot! Try again!</li>').prependTo('#guessList');
		else if (((input > targetValue) && (input - targetValue > 10)) || ((input < targetValue) && (input - targetValue < -10)))
			$('<li class="guesses">' + input + ' - Brrr! Cold. Try again!</li>').prependTo('#guessList');
		
		$('#userGuess').val('');

	}));

	/*--- New Game ---*/
	$(".new").click(function(){
	    window.location.reload(true);
	});
	
});
