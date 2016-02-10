
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
      var targetValue = Math.floor(Math.random() * 100) + 1;
      console.log(targetValue);
    });

});


