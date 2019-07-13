var canvas;
var context;

//текущее положение
var x = 0;
var y = 0;

window.onload = function() {
    //настройка холста
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    //рисуем фон лабиринта
    drawMaze('maze.png', 268, 5);

    //если нажата кнопка processKey()
    window.onkeydown = processKey;
};

/* отслеживает время, чтобы можно было перезапустить игру, 
если загружена другая картинка */
var time;

function drawMaze(mazeFile, startingX, startingY) {
    //прекратить движение смайла
    clearTimeout(timer);

    //остановить смаил
    dx = 0;
    dy = 0;

    //загрузка изображения
    var imgMaze = new Image();
    imgMaze.onload = function() {
        /*изменить размер холста с размером изображения*/
        canvas.width = imgMaze.width;
        canvas.height = imgMaze.height;

        //рисуем лабиринт
        context.drawImage(imgMaze, 0, 0);

        //рисуем грань
        x = startingX;
        y = startingY;

        var imgFace = document.getElementById('face');
        context.drawImage(imgFace, x, y);
        context.stroke();

        //следующий кадр за 10 мм
        time = setTimeout(drawFrame, 10);
    };

    imgMaze.src = mazeFile;
}

function processKey(e) {
    //если смаил движется, остановить
    dx = 0;
    dy = 0;

    /* если нажата клавиша (отрегулировать скорость) */
    //нажата клавиша вверх
    if(e.keyCode == 38) {
        dy = -1;
    }

    //нажата клавиша вниз
    if(e.keyCode == 40) {
        dy = 1;
    }

    //нажата клавиша в лево
    if(e.keyCode == 37) {
        dx = -1;
    }

    //нажата клавиша вправо
    if(e.keyCode == 39) {
        dx = 1;
    }
}

function checkForCollision() {
    /* выделить блок пикселей со слайдом
    расширив края*/
    var imgData = context.getImageData(x-1, y-1, 15+2, 15+2);
    var pixels = imgData.data;

    //проверить пикселы
    for(var i = 0; n = pixels.length, i < n; i++) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];

        //столкновение
        if(red == 0 && green == 0 && blue == 0) {
            return true;
        }

        //серое пространство края
        if(red == 169 && green == 169 && blue == 169) {
            return true;
        }
    }

    //столкновение не было
    return false;
}

function drawFrame() {
    if(dx != 0 || dy != 0) {
        /*Очистить положение смайла
        оставив след от смайла */
        context.beginPath();
        context.fillStyle = 'rgb(254, 244, 207)';
        context.rect(x, y, 15, 15);
        context.fill();

        //увеличить положение лица
        x += dx;
        y += dy;

        //остановить смайл если было столкновение
        if(checkForCollision()) {
            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        }

        /*нарисовать грань в новом положение */
        var imgFaca = document.getElementById('face');
        context.drawImage(imgFaca, x, y);

        /*проверить пройден ли лабиринт*/
        if(y > (canvas.height - 17)) {
            alert('вы прошли лабиринт');
            return;
        }
    }

    /*рисовать фрейм каждые 10 мм */
    timer = setTimeout(drawFrame, 10);
}