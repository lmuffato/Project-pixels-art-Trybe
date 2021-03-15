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

// criar elemento clique
let colorPalette = document.getElementsByClassName('color');

// Criar for para adicionar a cada elementos
for (let index = 0; index < colorPalette.length; index +=1){
colorPalette[index].addEventListener('click', selectedColor);
}

// evento da fução clique
function selectedColor(evento) {
  
   // REmove a classe select     
    let colors = document.querySelectorAll('.selected');
    colors[0].classList.remove('selected');

    // Adiciona a classe selected no elemento
    let colorElement = evento.target;
    colorElement.classList.add('selected');
}

// selectedColor();
