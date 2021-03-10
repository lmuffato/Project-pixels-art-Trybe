//Função para criar as divs da paleta de cores;
function paletteBox() {
    let colors = ['black', 'blue', 'green', 'yellow']; //Cores da paleta
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

function selectColor(eventoDeOrigem) {
    let elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    eventoDeOrigem.target.classList.add('selected');
}

for (let indexColors = 0; indexColors < colorsSelect.length; indexColors += 1) {
    colorsSelect[indexColors].addEventListener('click', selectColor);
}


function paintColor(toPaint) {
    let colorUsing = document.getElementsByClassName('selected');
    let saveSpecifcStyle = window.getComputedStyle(colorUsing[0]);//*
    let backgroundColor = saveSpecifcStyle.getPropertyValue('background');//*
    toPaint.target.style.background = backgroundColor;
    //FONTE: https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript
}

let boxToPaint = document.getElementsByClassName('pixel');
for (let index8 = 0; index8 < boxToPaint.length; index8 += 1) {
    boxToPaint[index8].addEventListener('click', paintColor);
}

let pixels = document.getElementsByClassName('pixel');
function paintOfWhite() {
    for (let index9 = 0; index9 < pixels.length; index9 += 1) {
        pixels[index9].style.background = 'white';
    }
}
let restarButton = document.getElementById('restart');
restarButton.addEventListener('click', paintOfWhite);