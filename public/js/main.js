$(document).ready(function() {
 "use strict";

        	var boxes = ["red", "green", "blue", "yellow"];
        
        	var liteId = [];
        	var lite;
        	var userClicked = "";
        	var userClickedIndex = 0
        	var i;
        	
        	var count = 0;
        
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
        		console.log(liteId);
        		// $('.box').animate( {
        		// 	opacity: "1",
        		// }, 800).animate({
        		// 	opacity: "0.5"
        		// }, 200);
				// $("#count").text(count);
				// gamePlay();
			});

			$(".box").click(function(){
				userClicked = this.id;
				if (userClicked === liteId[userClickedIndex]) {
					userClickedIndex += 1;
					if (userClickedIndex === liteId.length){
						userClickedIndex = 0;
						count++;
						updateCount();
						random();
						flashSequence();

					console.log(liteId);
					console.log(userClicked + " " + userClickedIndex);
					}
				} else{
					alert("Game Over!");
				}

			});

			function updateCount(){
				$("#count").text(count);
			}



        	

			
         });
