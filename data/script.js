//dolgosrochnie dannie
var nameInput = document.getElementById('userName');
localStorage['userName'] = nameInput.value;

if (localStorage['userName'] == '') {
    alert('вы неввели данные');
}
else {
    alert('спасибо за информацию');
}

//kratkosrochnie dannie
var today = Date();
sessionStorage['lastUpdateTime'] = today.getHours() + " : " + today.get-Minutes();