var canvas = document.getElementById("testSquare");
	var context = canvas.getContext("2d");
	
	var square = null;
	
	function initSquare () {
		square = {
		x: 50,
		y: 50
		}
		context.fillStyle = "#404040";
	}
	
	function draw() {
		if (square !== null) { 
		
			var size = 200;
			
			square.x += 10;
			square.y += 10;
			
			context.fillRect(square.x, square.y, size, size);
		}
		window.requestAnimationFrame(draw);
	}

	(function() {
		document.getElementById("testSquare")
		.addEventListener("click", initSquare);
	})();
	
	draw();