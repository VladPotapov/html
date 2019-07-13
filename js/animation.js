//данные для каждого круга
function Ball(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.strokeColor = "black";
  this.fillColor = "red";
}

//массив со всеми кругами
var balls = [];

var canvas;
var context;

window.onload = function() {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  canvas.onmousedown = canvasClick;

  //создаём следующий через 20 милисекунд
  setTimeout(drawFrame, 20);
};

function addBall() {
  //Получить требуемый размер
  var radius = parseFloat(document.getElementById("ballSize").value);

  //Создать новый шар
  var ball = new Ball(50, 50, 1, 1, radius);

  //сохранить его в массиве
  balls.push(ball);
}

function clearBalls() {
  balls = [];
}

function drawFrame() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  /*вызов beginPath() чтоб убедиться что раньше это 
  этот элемент не рисовался*/
  context.beginPath();

  //пройти все шары
  for(var i=0; i < balls.length; i++) {
    //переместить каждый шар в новое положение
    var ball = balls[i];
    ball.x += ball.dx;
    ball.y += ball.dy;

    //добавить эффект подения мяча
    if((ball.y) < canvas.height) ball.dy += 0.22;

    //замедление меча из стороны в сторону
    ball.dx = ball.dx * 0.998;

    //если мяч попал в бок, сделать отскок
    if((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
      ball.dx = -ball.dx;
    }

    /*если мяч ударился о пол, отскочить с замедлением */
    if((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) {
      ball.dy = -ball.dy * 0.96;
    }

    //хочет ли добавить строки пользователь
    if(!document.getElementById("connectedBalls").checked) {
      context.beginPath();
      context.fillStyle = ball.fillColor;
    }
    else {
      context.fillStyle = "white";
    }

    //нарисовать мяч
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    context.lineWidth = 1;
    context.fill();
    context.stroke();
  }

  //рисует следующий кадр за 20 миллисекунд
  setTimeout(drawFrame, 20);
}

function canvasClick(e) {
  /*получить координаты щелчка*/
  var clickX = e.pageX - canvas.offsetLeft;
  var clickY = e.pageY - canvas.offsetTop;

  //ищет щёлкнувший мяч
  for(var i in balls) {
    var ball = balls[i];
    if((clickX > (ball.x - ball.radius)) && (clickX < (ball.x + ball.radius))) {
      if((clickY > (ball.y - ball.radius)) && (clickY < (ball.y + ball.radius))) {

        //изменение скорости нажатого мяча
        ball.dx -= 2;
        ball.dy -= 3;
        return;
      }
    }
  }
}