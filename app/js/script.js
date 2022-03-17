var humburger = document.getElementById("humburger-menu");
var menu = document.getElementById("header__menu");
humburger.addEventListener('click', () => {
    if (humburger.classList.contains("open"))
    {
        menu.classList.remove("open");
        humburger.classList.remove("open");
    }
    else {
        menu.classList.add("open");
        humburger.classList.add("open");
    }
    
})