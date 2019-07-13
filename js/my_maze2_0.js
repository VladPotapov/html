var canvas;
var context;

//текущее положение смайла
var x = 0;
var y = 0;

//текущая скорость смайла
var dx = 0;
var dy = 0;

window.onload = function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    //код для локального хранилища
    var x = 268;
    var y = 5;
    if(typeof localStorage !== "undefined") {
        var savedX = localStorage.getItem("mazeGame_currentX");
        var savedY = localStorage.getItem("mazeGame_currentY");
        if (savedX != null) x = Number(savedX);
        if (savedY != null) y = Number(savedY);
    }

    //рисуем лабиринт
    drawMaze("maze.png", x, y);

    //Когда пользователь нажимает клавишу, запустить processKey
    window.onkeydown = processKey;
};

window.onbeforeunload = function() {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("mazeGame_currentX", x);
        localStorage.setItem("mazeGame_currentY", y);
    }
}

/*Следим за текущим временем, чтобы можно было начать с того места где игрок закончил если игра остонавливалась */
var timer;

function drawMaze(mazeFile, startingX, startingY) {
    // прекратить рисовать
    clearTimeout(timer);

    //остановить смайл
    dx = 0;
    dy = 0;

    //Загрузите изображение лабиринта.
    var imgMaze = new Image();
    imgMaze.onload = function() {
        /*Измените размер холста в соответствии с изображением лабиринта.*/
        canvas.width = imgMaze.width;
        canvas.height = imgMaze.height;

        //рисуем лабиринт
        context.drawImage(imgMaze, 0,0);

        //рисуем смайл
        x = startingX;
        y = startingY;

        var imgFace = document.getElementById('face');
        context.drawImage(imgFace, x, y);
        context.stroke();

        //перерисовываем кадр через каждые 10 милисекунд
        timer = setTimeout('drawFrame()', 10);
    };
    imgMaze.src = mazeFile;
}

function processKey(e) {
    //если смаил движется, остановить его
    dx = 0;
    dy = 0;

    // Если была нажата клавиша со стрелкой, отрегулируйте скорость соответствующим образом.
  // (Игнорировать любой другой ключ.)

  // Стрелка вверх.
  if (e.keyCode == 38) {
      dy = -1;
  }

  //стрелка вниз
  if (e.keyCode == 40) {
      dy = 1;
  }

  //стрелка влево
  if (e.keyCode == 37) {
      dx = -1;
  }

  //стрелка вправо
  if (e.keyCode == 39) {
      dx = 1;
  }
}

function checkForCollision() {
    /* Возьмите блок пикселей, где счастливое лицо, но немного расширьте края. Стрелка вверх была нажата, так что двигайтесь вверх. */
    var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
    var pixels = imgData.data;

    //провереть эти пикселы
    for (var i = 0; n = pixels.length, i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];

        //Ищите черные стены (что указывает на столкновение)
        if (red == 0 && green == 0 && blue == 0) {
            return true;
        }
        //проверка на столкновение
        if (red == 169 && green == 169 && blue == 169) {
            return true;
        }
    }
    //если столкновения не было
    return false;
}

function drawFrame() {
    //рисовать новую рамку, если смаил движется
    if(dx != 0 || dy != 0) {
        //очистить предыдущее положение смайла, оставив след
        context.beginPath();
        context.fillStyle = "rgb(254,244,207)";
        context.rect(x, y, 15, 15);
        context.fill();

        //увеличеть положение смайла
        x += dx;
        y += dy;

        //остановить смайл, если было столкновение
        if (checkForCollision()) {
            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        }

        //нарисовать смаил в новом положении
        var imgFace = document.getoElementById('face');
        context.drawImage(imgFace, x, y);

        //проверить пройден ли лабиринт
        //если это так сообщить об этом
        //перестать перерисовывать смаил
        if(y > (canvas.height - 17)) {
            alert('You win');
            return;
        }
    }

    //перерисовать смайл через 10 мл
    timer = setTimeout("drawFrame()", 10);
}

function resetPosition() {
    drawMaze('maze.png', 268, 5);
}