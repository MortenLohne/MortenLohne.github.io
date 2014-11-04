var canvas = document.getElementById("testSquare");
	var context = canvas.getContext("2d");
	
	var square = null;
	
	function initSquare () {
		square = {
		x: 50,
		y: 50,
		isGoingLeft: true,
		}
	}
	
	function draw() {
		if (square !== null) { 
		
			var squareSize = 200;
			var canvasSize = 400;
			
			context.fillStyle = "#FFFFFF";
			
			context.fillRect(square.x, square.y, squareSize, squareSize);
			
			if (square.isGoingLeft) {
				if (square.x + 5 > 0) {
					square.x -= 5;
				}
				else {
					square.isGoingLeft = false;
				}
			}
			else {
				if (square.x + squareSize + 5 < canvasSize) {
					square.x += 5;
				}
				else {
					square.isGoingLeft = true;
				}
			}
			
			context.fillStyle = "#404040";
			
			context.fillRect(square.x, square.y, squareSize, squareSize);
		}
		window.requestAnimationFrame(draw);
	}

	(function() {
		document.getElementById("testSquare")
		.addEventListener("click", initSquare);
	})();
	
	draw();