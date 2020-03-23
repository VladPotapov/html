let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFun(this.resposeText);
    }
}

xhttp.open("GET", "file.php", true);
xhttp.send();

function myFun(data) {
    console.log(data);
}