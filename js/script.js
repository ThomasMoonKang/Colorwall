$( document ).ready(function() {

	SquareField('random');
	var colorType = 'random';
	var red = 0;
	var green = 0;
	var blue = 0;
	var redx = 0;
	var greenx = 0;
	var bluex = 0;

	var showValues = false;
	$('.csquare').addClass('hidden-values')

	$(window).resize(function(){
		waitForFinalEvent(function(){
			SquareField(colorType);
		}, 500, "squareField");
	}); //Thanks to Brahn from stackoverflow for this function

	var changeTime = 100;

	var colorChangeTimer = setTimeout(ColorChange, changeTime);

	$( "#time-field" ).keydown(function() {
		changeTime = $('#time-field').val();
		console.log(changeTime);
		clearTimeout(colorChangeTimer);
	});

	$( "#time-field" ).keyup(function() {
		changeTime = $('#time-field').val();
		if(changeTime <= 1) changeTime =1;
		colorChangeTimer = setTimeout(ColorChange, changeTime);
	});

	$('.color-button').click(function(){
		colorType = $(this).attr('id');
		console.log(colorType);

		SquareField(colorType);
		//$(this).css('color','rgb('+red+','+green+','+blue+')');
	});

	$('#values').click(function(){
		if(showValues){
			$('.csquare').addClass('hidden-values')
			$('#values').html('Show Values');
			showValues = false;
		} else {
			$('.csquare').removeClass('hidden-values')
			$('#values').html('Hide Values');
			showValues = true;
		}
		//$(this).css('color','rgb('+red+','+green+','+blue+')');
	});
	function RandNum(min, max){
		//return Math.floor((Math.random() * b) + a);
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	function ColorChange(){ 
		console.log("change");
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var heightWidth = 100;
		var amtSquares = (windowHeight * windowWidth)/(heightWidth*heightWidth);
		ColorChoice(colorType);

		var changeNum = Math.floor((Math.random() * amtSquares) + 1);
		$('#content>.csquare:nth-child('+changeNum+')').css('background','rgb('+red+','+green+','+blue+')');
		$('#content>.csquare:nth-child('+changeNum+')').html('<span>'+red+','+green+','+blue+'</span>'); //Change visible rgb values
		if(changeTime <= 1) changeTime =1;
		colorChangeTimer = setTimeout(ColorChange, changeTime);
	}


	function SquareField(color){
		$('#content').empty();
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		var heightWidth = 100;
		var amtSquares = (windowHeight * windowWidth)/(heightWidth*heightWidth);
		for (i = 0; i < amtSquares; i++){
			console.log('createsquare');
			ColorChoice(color);

			$('#content').append('<div class="csquare" style="background:rgb('+red+','+green+','+blue+'); height:'+heightWidth+'px; width:'+heightWidth+'px;"><span>'+red+','+green+','+blue+'</span></div>')
		}
		if(!showValues){
			$('.csquare').addClass('hidden-values')
		} else {
			$('.csquare').removeClass('hidden-values')
		}
	}

	function ColorChoice(color){
		if(color == 'random'){
			red = RandNum(0,255);
			green = RandNum(0,255);
			blue = RandNum(0,255);
			$('#random').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'red'){
			red = RandNum(0,255);
			blue = RandNum(0,red);
			green = RandNum(0,blue);
			$('#red').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'orange'){
			red = RandNum(0,255);
			green = RandNum(0,red);
			blue = RandNum(0,green);
			$('#orange').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'yellow'){
			red = RandNum(0,255);
			greenx = 200;
			if(red <= 200) greenx = red;
			green = RandNum(greenx,red);
			blue = RandNum(0,red);
			$('#yellow').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'green'){
			green = RandNum(0,255);
			redx = 160;
			bluex = 123;
			if(green <= redx) {
				redx = green;
			}
			if(green <= bluex) {
				bluex = green;
			}
			red = RandNum(0,redx);
			blue = RandNum(0,bluex);
			$('#green').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'blue'){
			blue = RandNum(0,255);
			green = RandNum(0,blue);
			red = RandNum(0,green);
			$('#blue').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'purple'){
			blue = RandNum(0,255);
			redx = 120;
			if(blue <= 120) redx = blue;
			red = RandNum(redx,blue);
			green = RandNum(0,blue);
			$('#purple').css('color','rgb('+red+','+green+','+blue+')');
		} else if(color == 'gray'){
			red = RandNum(0,255);
			green = red;
			blue = red;
			$('#gray').css('color','rgb('+red+','+green+','+blue+')');
		} 
	}

	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};//Thanks to Brahn from stackoverflow for this function
	})();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65004072-1', 'auto');
  ga('send', 'pageview');
});