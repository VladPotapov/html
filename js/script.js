name = document.getElementById("user_name");
age = document.getElementById("user_age");
work = document.getElementById("user_work");

localStorage["name"] = name.value;
localStorage["age"] = age.value;
localStorage["work"] = work.value;

function findAllItems() {
    //Получаем элемент ul для списка элементов данных
    var itemList = document.getElementById('itemList');
    //очистка списка
    itemList.innerHTML = "";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        //получить элемент хранящийся под этим ключом
        var item = localStorage[key];
    }
}