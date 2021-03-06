var canvas = document.getElementById("testSquare");
	var context = canvas.getContext("2d");
	
	var canvasSize = 400;
	
	//var square = null;
	
	var squares = new Array();
	
	//squares[0] = square;
	var totalSquares = 0;
	
	function initSquare () {
		squares[totalSquares] = {
		x: 50,
		y: 50,
		size: 50,
		speedX: 9, //Should always be always positive. Change direction by flipping isGoingLeft.
		speedY: 5,
		}
		totalSquares += 1;
	}
	
	function flipSign (n) {
		return n * (0-1)
	}
	
	function willCollide (square, squares) {
		for (var i = 0; i < squares.length; i++) {
			if (square.x + square.speedX  squares[i].x
				|| square.x + square.speedX === squares[i].x + square.
		}
	
	}
	
	function draw() {
		context.clearRect(0, 0, canvasSize, canvasSize);
		for (var i = 0; i < squares.length; i++) {
			square = squares[i];
			
			// Changes the direction of the velocity if the square
			// is near the edges of the canvas
			if (square.x + square.speedX < 0 
				|| square.x + square.speedX + square.size > canvasSize) {
				square.speedX = flipSign (square.speedX);
			}
			if (square.y + square.speedY < 0 
				|| square.y + square.speedY + square.size > canvasSize) {
				square.speedY = flipSign (square.speedY);
			}
			
			square.x += square.speedX;
			square.y += square.speedY;
			
			context.fillRect(square.x, square.y, square.size, square.size);
		}
		window.requestAnimationFrame(draw);
	}

	(function() {
		document.getElementById("testSquare")
		.addEventListener("click", initSquare);
	})();
	context.fillStyle = "#404040";
	draw();