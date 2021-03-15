// ************** Cria função que adiciona a class pixel em cada elemento 'pixel' da board-grid **************** 
function addPixel() { 
  for (let index = 0; index < 25; index += 1) {
      let pixelParent = document.getElementById('pixel-board');
      let divPixel = document.createElement('div');
      divPixel.className = 'pixel'; // divPixel.classList.add('pixel') 
      pixelParent.appendChild(divPixel);
  }
}

addPixel();

// criar uma função com condição para add class selected uma cor por vez. Evento. 
// window.onload = funtion () {

// }

function selectedColor() {
  let colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', function ('click', select) {
    let colorElement = select.target;
    let colors = document.querySelectorAll('.color');
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].classList.remove('selected');
    }
    if (colorElement.localName === 'div') {
      colorElement.classList.add('selected');
    }
  });
}

selectedColor();
