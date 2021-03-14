function palette () {
const paletteColors = document.getElementById('color-palette');
for (let index = 0; index < 4; index += 1){
let colorsPalette = document.createElement('div');
colorsPalette.className = 'color';
paletteColors.appendChild(colorsPalette);
}
}
palette();

function colors () {
const colorDiv = document.getElementsByClassName('color');
colorDiv[0].style.backgroundColor = 'black';
colorDiv[1].style.backgroundColor = 'red';
colorDiv[2].style.backgroundColor = 'blue';
colorDiv[3].style.backgroundColor = 'purple';
}
colors();

function pixels () {
const pixelBoard = document.getElementById('pixel-board');
for (let index = 0; index < 5; index += 1){
    const pixelDiv = document.createElement('div');
    pixelBoard.appendChild(pixelDiv);
    for (let index = 0; index <5; index += 1){
        pixelDiv2 = document.createElement('div');
        pixelDiv.appendChild(pixelDiv2);
        pixelDiv2.classList.add('pixel');
    }
}
}
pixels();

