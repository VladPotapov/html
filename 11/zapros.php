<?php

require_once("file.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <div>
            <p>
                <input type="number" id="number1">
                <input type="number" id="number2">
            </p>
            <p>
                <button onclick="askServer()">запрос веб-серверу</button>
            </p>
        </div>
        <p id="result"></p>
    </div>
    <script>
        var result = document.getElementById("result");
        result.innerHTML = "результат: ";
        function askServer() {
            var number1 = document.getElementById("number1").value;
            var number2 = document.getElementById("number2").value;
            window.location.href = "http://localhost/html/11/file.php?number1="+number1+"&number2="+number2;
        }
    </script>
</body>
</html>