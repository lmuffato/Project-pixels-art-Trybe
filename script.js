function createColorsPallete(amount) {
  let divColors = document.querySelector('#color-palette');
  for (let index = 1; index <= amount; index += 1) {
    let colors = document.createElement('div');
    colors.className = 'color';
    divColors.appendChild(colors);
  }
}
createColorsPallete(4);

function assignColors() {
  let colors = document.querySelectorAll('.color');
  colors[0].style.backgroundColor = 'black';
  colors[1].style.backgroundColor = 'green';
  colors[2].style.backgroundColor = 'yellow';
  colors[3].style.backgroundColor = 'purple';
}
assignColors();

function createPixelBox(amount) {
  let divPixels = document.querySelector('#pixel-board');
  for (let index = 1; index <= amount; index += 1) {
    let boxes = document.createElement('div');
    divPixels.appendChild(boxes);
    for (let indexI = 1; indexI <= amount; indexI += 1) {
      let boxes1 = document.createElement('div');
      boxes1.className = 'pixel';
      boxes.appendChild(boxes1);
    }
  }
}
createPixelBox(5);

document.querySelectorAll('.color')[0].className += ' selected';

// Ajuda mútua, em especial ao Murilo Gonçalves, turma 10 - tribo A
function changeSelected() {
  let classSelected = document.querySelector('#color-palette');
  classSelected.addEventListener('click', function(event) {
    let classColor = event.target;
    let elementSelected = document.getElementsByClassName('selected');
    elementSelected[0].classList.remove('selected');
    classColor.classList.add('selected');
  });
}
changeSelected();

function changeColorBox() {
  let selectedBox = document.querySelector('#pixel-board');
  selectedBox.addEventListener('click', function (event) {
    let boxPixel = event.target;
    console.log(boxPixel)
    if (boxPixel.className === 'pixel') {
      let selectedColor = document.querySelector('.selected').style.backgroundColor;
      boxPixel.style.backgroundColor = selectedColor;
    }
  })
}
changeColorBox();