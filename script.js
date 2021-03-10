function createColorsPallete(amount) {
  const divColors = document.querySelector('#color-palette');
  for (let index = 1; index <= amount; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'color';
    divColors.appendChild(colors);
  }
}
createColorsPallete(4);

function assignColors() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'green';
  colors[2].style.backgroundColor = 'yellow';
  colors[3].style.backgroundColor = 'purple';
}
assignColors();

function createPixelBox(amount = 5) {
  const divPixels = document.querySelector('#pixel-board');
  for (let index = 1; index <= amount; index += 1) {
    const boxes = document.createElement('div');
    divPixels.appendChild(boxes);
    for (let indexI = 1; indexI <= amount; indexI += 1) {
      const boxes1 = document.createElement('div');
      boxes1.className = 'pixel';
      boxes.appendChild(boxes1);
    }
  }
}
createPixelBox(7);

document.querySelectorAll('.color')[0].className += ' selected';

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A
function changeSelected() {
  const classSelected = document.querySelector('#color-palette');
  classSelected.addEventListener('click', (event) => {
    const classColor = event.target;
    const elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    classColor.classList.add('selected');
  });
}
changeSelected();

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A
function changeColorBox() {
  const selectedBox = document.querySelector('#pixel-board');
  selectedBox.addEventListener('click', (event) => {
    const boxPixel = event.target;
    if (boxPixel.className === 'pixel') {
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      boxPixel.style.backgroundColor = selectedColor;
    }
  });
}
changeColorBox();

function clearBoxes() {
  const buttonClear = document.getElementsByTagName('button')[0];
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  buttonClear.addEventListener('click', () => {
    const clearColors = document.getElementsByClassName('pixel');
    for (let index = 0; index < clearColors.length; index += 1) {
      clearColors[index].style.backgroundColor = 'white';
    }
  });
}
clearBoxes();

const inputText = document.getElementsByTagName('input')[0];
inputText.id = 'board-size';
const buttonNumberPixel = document.querySelectorAll('button')[1];
buttonNumberPixel.id = 'generate-board';
buttonNumberPixel.innerText = 'VQV';
