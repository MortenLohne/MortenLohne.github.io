var canvas = document.getElementById("testSquare");
	var context = canvas.getContext("2d");
	
	var square = {
		x: 50,
		y: 50
		}
	
	function drawSquare() {
		
		var size = 200;
		
		context.fillStyle = "#404040";
		
		square.x += 10;
		square.y += 10;
			
		context.fillRect(square.x, square.y, size, size);
		window.requestAnimationFrame(drawSquare);
	}

	(function() {
		document.getElementById("testSquare")
		.addEventListener("click", drawSquare);
	})();