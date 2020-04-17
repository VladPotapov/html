function method_get() {
    let xhr = new XMLHttpRequest();
    
    //промежуток времени, который мы готовы ждать ответ
    //10 секунд
    xhr.timeout = 10000;

    //инициализация
    //true указывает что запрос асинхронный
    xhr.open("GET", "get.php");

    //запрос
    xhr.send();

    xhr.onload = function() {
        if(xhr.status != 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            //показывает статус и содержимое страницы
            console.log(`Загружено: ${xhr.status} \n ${xhr.response}`);
            console.log(`Готово получили ${xhr.response.length} байт`);
        }
    };

    xhr.onprogress = function(event) {
        if(event.lengthComputable) {
            console.log(`Загружено: ${event.loaded} из ${event.total}`);
            console.log(`lengthComputable = ${event.lengthComputable}`);
        }
        else {
            console.log(`Получено ${event.loaded} байт`);
        }
    };

    xhr.onerror = function() {
        alert(`ошибка соединения`);
    };


    console.log(xhr);
}

method_get();