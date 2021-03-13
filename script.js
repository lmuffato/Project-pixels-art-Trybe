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
// Chamar minha funçao
window.onload = function start() {
  setColors();
  createElementsTable(5);
};
