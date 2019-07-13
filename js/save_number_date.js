var today = new Date();

sessionStorage["session_started"] = today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();

today = sessionStorage["session_started"];

today = today.getFullYear();

alert(today);