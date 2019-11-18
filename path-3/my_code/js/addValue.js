function addValue() {
    // получаем значения из обоих текстовых полей
    var key = document.getElementById("key").value;
    var item = document.getElementById("item").value;
    // сохранить элемент в локальном хранилище
    //если ключ уже существует новый заменяет старый
    localStorage[key] = item;

    window.onload = function() {
        //подключаем событие onStorage к функции storageChanged() 
        window.addEventListener("storage", "storageChanged", false);
        
    }
}