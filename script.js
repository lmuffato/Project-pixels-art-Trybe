// ************** Cria função que adiciona a lcass pixel em cada elemento 'pixel' da board-grid **************** 
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
window.onload = funtion () {

}

function selectedColor() {
  let click = document.getElementById('color');
  let

  button.addEventListener(1, 2);
}
