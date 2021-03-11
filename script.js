let alreadyCreated = false;
let actualSize = [];
let colorpalle;
colorpalleteButtons = document.getElementsByClassName('color');
let pixelBoard = document.getElementById('pixel-board');
let black = colorpalleteButtons[0];
let blue = colorpalleteButtons[1];
let red = colorpalleteButtons[2];
let green = colorpalleteButtons[3];
let input = document.getElementById('board-size');
let pixelBlocks = 0;

if(sessionStorage.getItem("boardSize")==null){
    pixelBlocks = 25
}else{
    pixelBlocks = parseInt(sessionStorage.getItem("boardSize"))
}

window.onload = createPixelBlocks(pixelBlocks, 5);
function createPixelBlocks(size, lineSize) {
    for (let index = 1; index < size + 1; index++) {
    pixelSquare = document.createElement('div');
    pixelSquare.style.width = '40px';
    pixelSquare.style.height = '40px';
    pixelSquare.style.border = '1px solid black';
    pixelSquare.style.display = 'inline-block';
    pixelSquare.style.backgroundColor = 'white';
    pixelSquare.classList.add('pixel');
    pixelBoard.appendChild(pixelSquare);
    if (index % lineSize == 0 && index != 0) {
      let breakLine = document.createElement('br');
      pixelBoard.appendChild(breakLine);
      breakLine.classList.add('breakLinePixel');
    }
    alreadyCreated = true;
    actualSize.push(size);
    actualSize.push(lineSize);
  }
}

pixelBoard.addEventListener('click', fillPixel);

function fillPixel(e) {
  let event = e;
  event.target.style.backgroundColor = document.getElementsByClassName(
    'selected'
  )[0].id;
}
black.classList.add('selected');
black.addEventListener('click', chooseColor);
red.addEventListener('click', chooseColor);
green.addEventListener('click', chooseColor);
blue.addEventListener('click', chooseColor);

function chooseColor(e) {
  if (e.target.id == 'black') {
    black.classList.add('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected');
    green.classList.remove('selected');
  } else if (e.target.id == 'blue') {
    blue.classList.add('selected');
    black.classList.remove('selected');
    red.classList.remove('selected');
    green.classList.remove('selected');
  } else if (e.target.id == 'red') {
    red.classList.add('selected');
    black.classList.remove('selected');
    blue.classList.remove('selected');
    green.classList.remove('selected');
  } else if (e.target.id == 'green') {
    green.classList.add('selected');
    black.classList.remove('selected');
    blue.classList.remove('selected');
    red.classList.remove('selected');
  }
}

document.getElementById('clear-board').addEventListener('click', clear);

function clear() {
  pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = 'white';
  }
}
let submitButton = document.getElementById('generate-board');
submitButton.addEventListener('click', hookValue);

function hookValue() {
   sessionStorage.setItem('boardSize', input.value);
  
}
