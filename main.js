var btn = document.getElementById('submit-name-btn');
var dropdown = document.querySelector('.menu-icon');

btn.addEventListener('click', changeName);
dropdown.addEventListener('click', mobileMenu);

function changeName(e){
    e.preventDefault();
    const input = document.getElementById('name-input');
    let newName = document.querySelector('.dog-name');
    newName.innerText = input.value;
    input.value = '';
}

function mobileMenu(e) {
    e.preventDefault();
    const menu = document.querySelector('.mobile-menu');
    if (!menu.classList.contains('open')){
        menu.classList.add('open');
        menu.style.display=('block'); 
    } else {
        menu.classList.remove('open');
        menu.style.display=('none');
    }
}