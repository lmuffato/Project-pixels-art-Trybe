function setPixels() {
  const lines = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < lines.length; index += 1) {
    for (let column = 1; column <= 5; column += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      lines[index].appendChild(div);
    }
  }
}

function setBlackSelected() {
  const blackPalette = document.getElementById('black-palette');
  blackPalette.className += ' selected';
}

function setSelectedTask() {
  const paletteColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', (event) => {
      if (event.target.className === 'color') {
        const selectedTask = document.querySelector('.selected');
        selectedTask.className = 'color';
        paletteColors[index].className = 'color selected';
      }
    });
  }
}

function setPixelColor() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      const selectedTask = document.querySelector('.selected');
      const color = window.getComputedStyle(selectedTask).backgroundColor;
      pixels[index].style.backgroundColor = color;
    });
  }
}

window.onload = () => {
  setPixels();
  setBlackSelected();
  setSelectedTask();
  setPixelColor();
};
