
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
    $(".new").click(function(){
    	targetValue = Math.floor(Math.random() * 100) + 1;;
		//console.log(targetValue);
    });
	
	/*--- Guess ---*/
	$("#guessButton").on('click'(function(){
		var counter = document.getElementById("count").value;
		var input = document.getElementById("userGuess").value;
		
		return counter + 1;
      	if (input === targetValue)
		  	alert("You guessed it!");
		else if (((input > targetValue) && (input - targetValue <= 10)) || (input < targetValue) && (input - targetValue >= -10)
			alert("Ow! Hot! Try again!");
		else if (((input > targetValue) && (input - targetValue > 10)) || (input < targetValue) && (input - targetValue < -10)
			alert("Brrrr! Cold. Try again!");
	}));
	
	
	
});


//var input = $("myText").value
