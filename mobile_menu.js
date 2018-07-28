const button = document.getElementById('burger-menu');

button.addEventListener('click', function() {
    let menu = document.getElementById('menu');

    if (menu.style.display === '') {
        menu.style.display = 'block';
    }
    else {
        menu.style.display = '';
    }
});