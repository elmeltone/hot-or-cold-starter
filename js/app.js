
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- New Game ---*/
	$(".new").click(function newGame(){
	    targetValue = Math.floor(Math.random(event) * 100) + 1;
		console.log(targetValue);
	});
	
	/*--- Guess ---*/
	$(".button").on('click',(function newGuess(event){
		event.preventDefault();
		
		var counter = parseInt(document.getElementById('count').innerHTML,10);
		counter = counter+1;
		document.getElementById('count').innerHTML = counter.toString();
		var input = document.getElementById("userGuess").value;

		if (input == targetValue)
	  		alert("You guessed it!");
		else if (((input > targetValue) && (input - targetValue <= 10)) || ((input < targetValue) && (input - targetValue >= -10)))
			$('<li class="guesses">' + input + ' - Ow! Hot! Try again!</li>').appendTo('#guessList');
		else if (((input > targetValue) && (input - targetValue > 10)) || ((input < targetValue) && (input - targetValue < -10)))
			$('<li class="guesses">' + input + ' - Brrr! Cold. Try again!</li>').appendTo('#guessList');
		
		$('#userGuess').val('');
	
		/* Guess with Enter button */
		$('#userGuess').on('keydown',(function(event) {
			if(event.keyCode === 13){
				event.preventDefault();
				$('.button').click();
			};
		}));

	}));
	
	
});
