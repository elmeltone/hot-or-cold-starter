
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
	$(".new").click(function(event){
	    targetValue = Math.floor(Math.random() * 100) + 1;
		console.log(targetValue);
	});
	
	/*--- Guess ---*/
	$(".button").on('click',(function(event){
		event.preventDefault();
		
		var counter = $("count").value;
		console.log(counter);
		var input = document.getElementById("userGuess").value;
	
		//return counter + 1;
  		if (input == targetValue)
	  		alert("You guessed it!");
		else if (((input > targetValue) && (input - targetValue <= 10)) || ((input < targetValue) && (input - targetValue >= -10)))
			alert("Ow! Hot! Try again!");
		else if (((input > targetValue) && (input - targetValue > 10)) || ((input < targetValue) && (input - targetValue < -10)))
			alert("Brrrr! Cold. Try again!");
	}));


	
	
});


//var input = $("myText").value
