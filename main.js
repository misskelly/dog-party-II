var btn = document.getElementById('submit-name-btn');
btn.addEventListener('click', changeName);

function changeName(e){
    e.preventDefault();
    const input = document.getElementById('name-input');
    let newName = document.querySelector('.dog-name');
    newName.innerText = input.value;
    input.value = '';
}