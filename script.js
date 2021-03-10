window.onload = function () {
  document.getElementById('black').classList.add('selected');
};

function cleanColor() {
  document.querySelector('.selected').classList.remove('selected');
}

function selectColorPaint(event) {
  const currentColor = event.target;
  cleanColor();

  currentColor.classList.add('selected');
  console.log(currentColor);
}

function paintingPixels(event) {
  const pixelColor = event.target;
  const colorPickup = document.querySelector('.selected');
  const colorStyles = window.getComputedStyle(colorPickup).getPropertyValue('background-color');

  pixelColor.style.backgroundColor = colorStyles;
  console.log(pixelColor);
  console.log(colorStyles);
}

document.getElementById('color-palette').addEventListener('click', selectColorPaint);

document.getElementById('pixel-board').addEventListener('click', paintingPixels);
