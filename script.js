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
