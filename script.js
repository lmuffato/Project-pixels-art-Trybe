//Função para criar as divs da paleta de cores;
function paletteBox() {
    let colors = ['black', 'blue', 'green', 'yellow', 'red', 'cyan', 'brown']; //Cores da paleta
    let paletteSelect = document.getElementById('color-palette');//acessa a div mãe
    for (let index = 0; index < colors.length; index += 1) {
        let paletteCreator = document.createElement('div'); //cria uma div
        paletteCreator.style.background = colors[index];
        paletteSelect.appendChild(paletteCreator).className = 'color'; //cria divs como filhas da div mãe
    }
}
paletteBox();

function accessElement(tagId, elementType, position) {
    let access = document.querySelectorAll(tagId);
    let create = document.createElement(elementType);
    let print = access[position].appendChild(create);
    return print;
}

for (let index = 1; index < 6; index += 1) {
    accessElement('#pixel-board', 'div', 0).classList.add('tr');
}
for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
        accessElement('.tr', 'div', index).classList.add('td', 'pixel');
    }
}

let initialColor = document.querySelector('div').classList.add('selected', 'color');
let colorsSelect = document.getElementsByClassName('color');

function selectColor (eventoDeOrigem) {
    let elementSelected = document.getElementsByClassName('selected');
        elementSelected[0].classList.remove('selected');
    eventoDeOrigem.target.classList.add('selected');
}

for (let indexColors =0; indexColors < colorsSelect.length; indexColors += 1) {
    colorsSelect[indexColors].addEventListener('click', selectColor);
}

