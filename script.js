function selectedColor() {
    const selected1 = document.querySelector('#color-palette');

    selected1.addEventListener('click',function(event) {
        limpaSelected();
        event.target.classList.add('selected') 
    })
}

function limpaSelected() {
    const colorSelected = document.querySelector('.selected');
    colorSelected.classList.remove('selected');
}

selectedColor();
