const button = document.getElementById("reload-page");

function redirect () {
    window.location.href = "./index.html";
}

button.addEventListener('click', redirect);