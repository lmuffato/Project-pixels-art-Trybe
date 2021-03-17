const pixelboard = document.getElementById('pixel-board');
for (let index = 1; index <= 25; index += 1) {
  const pixel = document.createElement('div');
  pixelboard.appendChild(pixel);
  pixel.className = 'pixel';
}
//colocando a cor preta como selecionada
document.getElementById('color-palette').firstElementChild
.classList.add('selected');


// selecionando cores
function colorSelected () {
    let color = window.getComputedStyle(document.querySelector('.selected'),null).getPropertyValue("background-color");
    return color;
}
let currentColor = colorSelected ();
