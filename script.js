function createPixels(n) {
  const container = document.getElementById('pixels-board');
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    container.appendChild(row);
  }
}
function createCanvas(x, y) {
  createPixels(x * y);
  // Everything else is done 'automagically' by display flex config
}
function setInitialColor() {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.classList.toggle('selected');
}
function changeSelectedColor(e) {
  const lastSelected = document.querySelector('#color-palette > .selected');
  lastSelected.classList.toggle('selected');
  e.target.classList.toggle('selected');
}
function createColorPalleteListener() {
  const container = document.getElementById('color-palette');
  container.addEventListener('click', changeSelectedColor, false);
}

window.onload = function init() {
  createCanvas(5, 5);
  setInitialColor();
  createColorPalleteListener();
};
