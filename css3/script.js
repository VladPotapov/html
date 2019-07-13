var img1 = document.getElementById('gallery_img1');
var img2 = document.getElementById('gallery_img2');
var img3 = document.getElementById('gallery_img3');
var img4 = document.getElementById('gallery_img4');
var img5 = document.getElementById('gallery_img5');

function randMath(min, max) {
    return Math.random() * (max - min) + min;
}

i = parseInt(randMath(0, 100));
img1.style.transform = 'rotate('+i+'deg)';
i = parseInt(randMath(0, 100));
img2.style.transform = 'rotate('+i+'deg)';
i = parseInt(randMath(0, 100));
img3.style.transform = 'rotate('+i+'deg)';
i = parseInt(randMath(0, 100));
img4.style.transform = 'rotate('+i+'deg)';
i = parseInt(randMath(0, 100));
img5.style.transform = 'rotate('+i+'deg)';