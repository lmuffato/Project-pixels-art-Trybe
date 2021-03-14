function createColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

function setColors() {
  const getDivs = document.getElementsByClassName('color');
  for (let index = 0; index < getDivs.length; index += 1) {
    getDivs[index].style.backgroundColor = createColor();
    if (getDivs[index] === getDivs[0]) {
      getDivs[index].style.backgroundColor = 'black';
    }
  }
}
// Requisito 4
// Recupera meu elemento Pai do HTML ok
// Criar elementos de coluna ok
// Criar elementos de linha ok
function createElementsTable(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  // Setar cada elemento como filho de outro elemento ok
  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    // Setar cada elemento como filho de outro elemento ok
    for (let index = 0; index < number; index += 1) {
      const colum = document.createElement('td');
      // Da uma class ao elememto ok
      colum.className = 'pixel';
      row.appendChild(colum);
    }
  }
  // Dar um retorno pra minha função ok
  return pixelBoard;
}

// Requisito 7
//  7. Recuperar meu elemento com a class color (selected)
function getColor(event) {
  const color = document.querySelectorAll('.color');
  // Remover a class selected do elemento atual e
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].className === 'color selected') {
      color[index].classList.remove('selected');
    }
  }
  // Adicionar a class selected ao clicar em outro elemento;
  if (event.target.className === 'color') {
    event.target.classList.add('selected');
  }
}

function managerEvents() {
//  7. Recuperar o elemento  pai da class selected
  const colorPalette = document.querySelector('#color-palette');
  // 7. Adiciona um evento de click (Adicionar a class selected ao clicar em outro elemento);
  colorPalette.addEventListener('click', getColor);
}
// Chamar minhas funções:
window.onload = function start() {
  setColors();
  createElementsTable(5);
  managerEvents();
};
