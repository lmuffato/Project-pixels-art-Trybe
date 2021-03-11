// clica na palete de cores
// retirar o selected da anterior
// inclui na selecionada

// 1.cria o click
let clickColor = document.getElementsByClassName('color');

// 2. adiciona o click
for(let index = 0; index < clickColor.length; index +=1) {
    clickColor[index].addEventListener('click', selectedRemove);
}

// remove a selected de todas as classes
function selectedRemove (evente) {
    let divClassRemove = document.getElementsByClassName('selected');
    divClassRemove[0].classList.remove('selected');

    let eventeTarget = evente.target;
    eventeTarget.classList.add('selected');
} 

// 
// guardar a cor do selected

let colorSelected = document.querySelector('.selected').style.backgroundColor;

// incluir click nos pixels
let pixelSelect = document.getElementsByClassName('pixel');

for(let index = 0; index < pixelSelect.length; index +=1) {
    pixelSelect[index].addEventListener('click', pixelColor);
}

// funcção clicar no pixel
function pixelColor (event) {
    let eventTarget = event.target;
    eventTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}