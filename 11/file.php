<?php
    $number1 = $_GET['number1'];
    $number2 = $_GET['number2'];
    $sum = $number1 + $number2;

    echo $sum;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script>
        document.getElementById("result").innerHTML = "<?php echo $sum; ?>"
    </script>
    <meta http-equiv="refresh" content="0.5; url=zapros.html">
    <title>Document</title>
</head>
<body>
    
</body>
</html>