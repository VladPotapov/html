let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if ( this.readyState == 4 && this.status == 200 ) {
        myFunction(this.responseText);
    }
};

xhttp.open("GET", "get.php", true);
xhttp.send();

function myFunction (data) {
    console.log(data);
}

console.log('step1');