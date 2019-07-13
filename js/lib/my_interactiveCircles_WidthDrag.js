function Circle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
	this.isSelected = false;
}

var circles = [];
var canvas;
var context;

window.onload = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	canvas.onmousedown = canvasClick;
	canvas.onmouseup = stopDragging;
  canvas.onmouseout = stopDragging;
	canvas.onmousemove = dragCircle;
};

function addRandomCircle() {
	//случайный размер и положение круга
	var radius = randomFromTo(10, 60);
	var x = randomFromTo(0, canvas.width);
	var y = randomFromTo(0, canvas.height);

	// случайный цвет круга
	var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
	var color = colors[randomFromTo(0, 8)];

	//создаём новый круг
	var circle = new Circle(x, y, radius, color);

	//сохраняем его в массив
	circles.push(circle);

	//обновляем отображение холста
	drawCircles();
}

function clearCanvas() {
	//удаляем круги
	circles = [];

	//обновляем дисплей
	drawCircles();
}

function drawCircles() {
	//очищаем canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	//перебор всех кругов
	for(var i=0; i<circles.length; i++) {
		var circle = circles[i];

		context.globalAlpha = 0.85;

		//рисуем следующий круг
		context.beginPath();
		context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
		context.fillStyle = circle.color;
		context.strokeStyle = "black";

		if(circle.isSelected) {
			context.lineWidth = 5;
		}
		else {
			context.lineWidth = 1;
		}
		context.fill();
		context.stroke();
	}
}

var previousSelectedCircle;

function canvasClick(e) {
	var clickX = e.pageX - canvas.offsetLeft;
	var clickY = e.pageY - canvas.offsetTop;

	//проверяем не щёлкнул ли кто по кругу
	for(var i=circles.length-1; i>=0; i--) {
		var circle = circles[i];

		var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));
		if(distanceFromCenter <= circle.radius) {
			if(previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
			previousSelectedCircle = circle;

			circle.isSelected = true;

			isDragging = true;

			drawCircles();
			return;
		}
	}
}

var isDragging = false;

function stopDragging() {
	isDragging = false;
}

function dragCircle(e) {
	//перетащить круг?
	if(isDragging == true) {
		//если круг существует
		if(previousSelectedCircle != null) {
			//определить новое место положение для круга
			var x = e.pageX - canvas.offsetLeft;
			var y = e.pageY - canvas.offsetTop;

			//переместить круг в это место
			previousSelectedCircle.x = x;
			previousSelectedCircle.y = y;

			//обновить canvas
			drawCircles();
		}
	}
}

function randomFromTo(from, to) {
	return Math.floor(Math.random() * (to - from + 1) + from);
}