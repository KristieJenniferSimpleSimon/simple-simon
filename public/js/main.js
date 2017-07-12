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

            $(".box").click(function(){
                $('#' + this.id).animate( {
                    opacity: "1",
                        }, 800). animate( {
                    opacity: "0.5"
                        }, 200);
            });

        	$("#start").click(function(){
        		random();
        		flashSequence();
        		console.log(liteId);
                $(this).attr("disabled", true);

			});

			$(".box").click(function(){
				userClicked = this.id;
				if (userClicked === liteId[userClickedIndex]) {
					userClickedIndex += 1;
					if (userClickedIndex === liteId.length){
						userClickedIndex = 0;
						count++;
						updateCount(); 

                        var timeOut = setTimeout(function(){
                            random();
                            flashSequence();
                        }, 2000);
 
					console.log(liteId);
					console.log(userClicked + " " + userClickedIndex);
					}
				} else{
					alert("Game Over!");
                    gameOver();
				}

			});

			function updateCount(){
				$("#count").text(count);
			}



            function gameOver(){
                userClicked = "";
                userClickedIndex = 0;
                liteId = [];
                count = 0;
                $("#start").attr("disabled", false);
                location.reload();
            

        	

			
         });
