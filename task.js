const cookieImage = document.getElementById("cookie");
let cookieClick = document.getElementById("clicker__counter");

cookieImage.onclick = function () {
    cookieImage.classList.contains('clicker__cookie') ? cookieImage.className = 'new__clicker__cookie' : cookieImage.className = 'clicker__cookie';

    let currentClicks = parseInt(cookieClick.textContent);
    cookieClick.textContent = currentClicks + 1;
    cookie.width = 100;
    setTimeout(() => {cookie.width = 200;}, 50);
  }