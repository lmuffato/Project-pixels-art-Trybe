// REQUISITO 2 - CRIANDO PALETA DE CORES //

function tableColorPalette() { // CRIANDO TABELA //
  const placePalette = document.querySelector('#color-palette');
  const paletteColors = document.createElement('table');
  placePalette.appendChild(paletteColors); // filho de color palette //
  // Criando célula da Paleta de Cores e a Classe Color //
  const numberCells = 4;
  for (let index; index < numberCells; index += 1) {
    const createCells = document.createElement('td');
    createCells.className = 'color'; // criando a classe color //
    paletteColors.appendChild(createCells); // filho de table //
  }
}

 // inserindo cores na Paleta //
 let createColors = document.getElementsByClassName('color');
 let black = createColors[0];
 for (let index = 0; index < createColors.length; index += 1){
     console.log(createColors[index]);
 }

window.onload = function () {
  tableColorPalette();
};
