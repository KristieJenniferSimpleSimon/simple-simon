$(document).ready(function() {
 "use strict";

        	var boxes = ["one", "two", "three", "four"];
        	// var random = [];
        	var liteId = [];
        	var lite;
        	var userClicked = [];
        	var i;
        	var colorArray = 0;
        	var count = 1;
        	var on;
        	var off;
        	var stopInterval;

        	function random() {
        		console.log(boxes);	
        		var randomColor = Math.round(Math.random() *  boxes.length);
        		liteId.push(boxes[randomColor]);
        		return liteId;
        	}

        	function flashSequence() {
        		liteId.forEach(function(element, index) {
        			setTimeout(function() {
	        			$('#' + element).animate( {
	        				opacity: "1",
	        			}, 800). animate( {
	        				opacity: "0.5"
	        			}, 200);
        			}, index * 1000);
        		});
        	}

        	$("#start").click(function(){
        		random();
        		flashSequence();
        		// $('.box').animate( {
        		// 	opacity: "1",
        		// }, 800).animate({
        		// 	opacity: "0.5"
        		// }, 200);
				// $("#count").text(count);
				// gamePlay();
			});


        	

	        function gamePlay() {
	        	if (count <= 10) {
	        		off = 400;
	        		on = 800;
	        	} else {
	        		off = 250;
	        		on = 500;
	        	}
	        };

		        var stopInterval = setInterval(function(){
		        	if (random[colorArray] == 1) {

		        		lite = "activeBox1";
		        		$("#one").addClass(lite);
		        		$("#audio1")[0].play();
		        		liteId.push(1);

		        		setTimeOut(function(){
		        			$("#one").removeClass(lite);

		        		}, off);
		        	}

		        	else if(random[colorArray] ==2) {
		        		
		        		lite = "activeBox2";
		        		$("#two").addClass(lite);
		        		$("#audio2")[0].play();
		        		liteId.push(2);

			        	setTimeOut(function(){
			        		$("#two").removeClass(lite);

			        	}, off);

			        }

		        	else if(random[colorArray] ==3) {

		        		lite = "activeBox3";
		        		$("#three").addClass(lite);
		        		$("#audio3")[0].play();
		        		liteId.push(3);

			        	setTimeOut(function(){
			        		$("#three").removeClass(lite);

			        	}, off);

		        	}

		        	else if(random[colorArray] ==4) {
		        		lite = "activeBox4";
		        		$("#four").addClass(lite);
		        		$("#audio4")[0].play();
		        		liteId.push(4);

			        	setTimeOut(function(){
			        		$("#four").removeClass(lite);

			        	}, off);
		        	}

		        	colorArray ++;
		        		if (colorArray = count) {
		        			clearInterval(stopInterval);
		        		}

		        	}, on);
		    });
	
			function checkInput(){
				if(liteId.length == userClicked.length) {
					
					if (liteId.join() == userClicked.join()){
						if (count == 20) {
							setTimeOut(function(){
								alert ("You Win!!!");
							location.reload();
							},1000);

						} 

						else {
							setTimeOut(function(){
								$("#count").text(count + 1);
								count ++;
								liteId = [];
								userClicked = [];
								colorArray = 0;
								gamePlay();
							},1000);
						}
					} 

					else {
						if (strict == 1) {
							location.reload();

						} 

						else {
							setTimeOut(function(){
								$("#count").text("!!");
								liteId = [];
								userClicked = [];
								colorArray = 0;
								gamePlay();
							}, 1000);
						}
					}
				}
			}

			$("#on").click(function(){
				$("#count").text("");
				for (i = 0; i < 20; i++){
					random[i] = math.ceil(math.random() *4);
				}
			});

			$("#strict").click(function(){
				strict = 1;
				});

			// $("#start").click(function(){
			// 	$("#count").text(count);
			// 	// gamePlay();
			// });

			
         //});
