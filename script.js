// REQUISITO 2 - CRIANDO PALETA DE CORES //

function tableColorPalette() {
  // CRIANDO TABELA //
  const placePalette = document.querySelector('#color-palette');
  const paletteColors = document.createElement('table');
  placePalette.appendChild(paletteColors); // filho de color palette //
  // Criando célula da Paleta de Cores e a Classe Color //
  const numberCells = 4;
  for (let index = 0; index < numberCells; index += 1) {
    const createCells = document.createElement('td');
    createCells.className = 'color'; // criando a classe color //
    paletteColors.appendChild(createCells); // filho de table //
  }
  // inserindo cores na Paleta //
  const createColors = document.querySelectorAll('.color');
  const selectedColor = ['black', 'blue', 'crimson', 'yellow'];
  for (let index = 0; index < selectedColor.length; index += 1) {
    createColors[index].style.background = selectedColor[index]; // for (let index2 = 0; index2 < createColors.length; index2 += 1) { createColors[index2].style.backgroundColor = selectedColor[index]; //
  }
  createColors[0].classList.add('selected'); // REQUISITO 6 - Defina a cor preta como cor inicial //
}

window.onload = function () {
  tableColorPalette();
};
