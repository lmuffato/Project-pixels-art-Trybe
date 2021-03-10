// REQUISITO 7 //

function addClickColor() {
    let colorClass = document.querySelectorAll('.color'); // colorClass -> objeto //
    for (let index = 0; index < colorClass.length; index += 1) {
        colorClass[index].addEventListener('click', addClickColor); // adicionando o evento click //
    }
}    
function addClickColor() {
    for (let index2 = 0; index2 < colorClass.length; index += 1) {
        colorClass[index2].classList.remove('selected');
    }
    this.classList.add('selected');
}

window.onload = function () {
    addClickColor();
}
    