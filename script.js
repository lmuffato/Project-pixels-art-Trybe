//Variaveis Gerais.//
const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

//Funções e Eventos gerais.

for (let index = 0; index < 5; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'line';
    pixelBoard.appendChild(linha);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha.appendChild(pixel);
    }
}