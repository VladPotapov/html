var slideNumber;
var req = new XMLHttpRequest();

window.onload = function () {
    slideNumber = 0;
}

function nextSlide() {
    if (slideNumber == 5) {
        slideNumber = 1;
    }
    else {
        slideNumber += 1;
    }

    goToNewSlide();
    return false;
}

function goToNewSlide() {
    if (req != null) {
        req.open("GET", "my_chinaSites" + slideNumber + "_slide" + ".html", true);
        req.onreadystatechange = newSlideReceived;
        req.send();
    }
    else {
        console.log("problems");
    }
}

function previousSlide() {
    if (slideNumber == 1) {
        slideNumber = 1;
    }
    else {
        slideNumber -= 1;
    }

    goToNewSlide();
    return false;
}

function newSlideReceived() {
    if ((req.readyState == 4) && (req.status == 200)) {
        document.getElementById("slide").innerHTML = req.responseText;
    }
}