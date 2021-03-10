const color = ['black', 'red', 'blue', 'yellow'];
let old = 0;
let select = 'black';
window.onload = function init() {
  function colorButton() {
    const colorBlock = document.querySelectorAll('.color');
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].style.background = color[index];
      colorBlock[index].addEventListener("click", selectColor);
    }
  }

  function colorPixels() {
    const colorPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixel.length; index += 1) {
      colorPixel[index].addEventListener("click", pixels);
    }
  }
  colorButton();
  colorPixels();
}

function pixels(e) {
  e.target.style.setProperty('background', select);
}

function selectIndex(colorIndex) {
  for (let index = 0; index < color.length; index += 1) {
    if (colorIndex === color[index]) {
      return index;
    }
  }
}

function selectColor(e) {
  select = e.target.style.background;
  let index = selectIndex(select);
  document.querySelectorAll('.color')[old].classList.remove("selected");
  document.querySelectorAll('.color')[index].classList.add("selected");
  old = index;
}