function makeGrid (){
	for (var i=0; i < gridSize * gridSize; i++) {
		$('#canvas').append('<div class="box outline"></div>')
	};

	$('.box').css({
		'width': $('#canvas').width() / gridSize,
		'height': $('#canvas').height() / gridSize
	});

}
function draw() {
	$(".box").mouseenter(function(){
		$(this).css("background-color", "black")
	});
}

function clear() {
	$('.box').css('background-color', 'white')

}



$(document).ready(function(){
	gridSize = 16;
	makeGrid();
	draw();

	$('#clear').click(clear);
	$('#changeGrid').click(function(){
		gridSize = prompt('Enter a number to change the grid dimensions');
		$('#canvas').empty();
		makeGrid();
		draw();
	});
})