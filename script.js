window.onload = () => {
  const lines = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < lines.length; index += 1) {
    for (let column = 1; column <= 5; column += 1) {
      const div = document.createElement('div');
      div.className = 'pixel';
      lines[index].appendChild(div);
    }
  }
  const blackPalette = document.getElementById('black-palette');
  blackPalette.className += ' selected';

};

  function setSelectedTask(element) {
  const selectedTask = document.getElementsByClassName('selected')[0];
  selectedTask.className = 'color';
  element.className = 'color selected';
  }

  const paletteColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteColors.length; index += 1) {
  paletteColors[index].addEventListener('click', (event) => {
    if (event.target.className === 'color') {
    setSelectedTask(paletteColors[index]);
    }
  });
  }

  function setPixelColor(element) {
    const selectedTask = document.querySelector('.selected');
    const color = window.getComputedStyle(selectedTask).backgroundColor;
    element.style.backgroundColor = color;
  }

  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      setPixelColor(pixels[index]);
    });
  }


