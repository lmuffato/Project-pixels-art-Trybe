function addPaletteListener() {
  const colorElement = document.getElementsByClassName('color');

  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].addEventListener('click', changeSelected);
  }
}

function changeSelected(eventOrigin) {
  const selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  const clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}

function addPixelListener() {
  const pixels = document.getElementsByClassName('pixel');
  
  for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].addEventListener('click', applyColor);
  }
}

function applyColor(eventOrigin){
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const clickedPixel = eventOrigin.target;
  clickedPixel.style.backgroundColor = selectedColor;
}

function addButtomListener(){
  const buttom = document.getElementById('clear-board');
  buttom.addEventListener('click', cleanBoard);
}

function cleanBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

addPaletteListener();
addPixelListener();
addButtomListener();
