window.onload = function pixelsArt() {
  const pixelLine = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < 5; indexColumn += 1) {
      const pixel = document.createElement('td');
      pixelLine.children[indexColumn].appendChild(pixel).className = 'pixel';
    }
  }

  document.getElementById('black').classList.add('selected');
};

const colors = document.getElementsByClassName('color');

function changeColor(e) {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];
    const event = e.target;

    if (event === element) {
      event.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  }
}

function selectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];

    element.addEventListener('click', changeColor);
  }
}

selectColor();
