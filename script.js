
// Variaveis Gerais//
const colorPalette = document.getElementById('color-palette');
const colors = ['black', 'green', 'red', 'blue'];
const pixelBoard = document.getElementById('pixel-board');
const colorSelected = document.getElementsByClassName('color');
const buttonElement = document.querySelector('#clear-board');
const pixelSelected = document.getElementsByClassName('pixel');

// Funções e Eventos Gerais
for (let colorPos = 0; colorPos < 4; colorPos += 1) { //Gera os blocos de cores
  const createBoxColors = document.createElement('li');
  createBoxColors.className = 'color';
  createBoxColors.style.backgroundColor = colors[colorPos];
  colorPalette.appendChild(createBoxColors);
}

for (let linePos = 0; linePos < 5; linePos += 1) { //Gera a tabela
  const linha = document.createElement('div'); 
  linha.className = 'line';
  pixelBoard.appendChild(linha);
  for (let pixelPos = 0; pixelPos < 5; pixelPos += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    linha.appendChild(pixel);
  }
}

window.onload = function () { //Seleciona a cor preta como padrão ao carregar a pagina
  colorSelected[0].className += ' selected';
};

function changeSelected(select) {  //Seleciona o pixel que vai ser pintado
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  select.className += ' selected';
}

colorPalette.addEventListener('click', function (e) { //Troca a cor selecionada para pintar
  changeSelected(event.target);
});

pixelBoard.addEventListener('click', function (e) { //Troca a cor do pixel para a cor selecionada
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});

buttonElement.addEventListener('click', function () { //Limpador de Tela
  for (let screenCleaner = 0; screenCleaner < pixelSelected.length; screenCleaner += 1) {
    pixelSelected[screenCleaner].style.background = 'white';
  }
});
