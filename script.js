function classChange(event) {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.querySelector('#color-palette').addEventListener('click', classChange);

// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

function selectColor() {
  const getColorElement = document.querySelector('.selected');
  const selColor = window.getComputedStyle(getColorElement).getPropertyValue('background-color');
  return selColor;
}

function pixelsColor() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const pixelItem = event.target;
      pixelItem.style.backgroundColor = selectColor();
    });
  });
}
pixelsColor();
