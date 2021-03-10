function colorForChoose() {
  const colorBlock = document.querySelectorAll('.color');

  for (let index = 0; index < colorBlock.length; index += 1) {
    switch (index) {
    case 0:
      colorBlock[index].style.backgroundColor = 'black';
      colorBlock[index].className = 'color selected';
      break;
    case 1:
      colorBlock[index].style.backgroundColor = 'red';
      break;
    case 2:
      colorBlock[index].style.backgroundColor = 'yellow';
      break;
    default:
      colorBlock[index].style.backgroundColor = 'orange';
    }
  }
}

colorForChoose();

getInputText();  

function lineBoardGeneration(size) {

  let squareBase = 5

  if (size) {
    squareBase = size;
    numTr = document.getElementById('pixel-board');
    while (numTr.hasChildNodes()){
      numTr.removeChild(numTr.firstChild);
    }
  }

  let tableContainer = document.getElementById('pixel-board');
  
  for (let index = 0; index < squareBase; index += 1) {
    let lineConteiner = document.createElement('tr');
    lineConteiner.className = 'line-container';
    tableContainer.appendChild(lineConteiner);
  }

  columnBoardGeneration();
}

lineBoardGeneration();

function columnBoardGeneration() {
  amountTag = document.getElementsByTagName('tr');
  console.log(amountTag.length);

  for (let line = 0; line < amountTag.length; line += 1) {
    for (let index = 0; index < amountTag.length; index += 1) {
      const squarePixel = document.createElement('td');
      squarePixel.className = 'pixel';
      amountTag[line].appendChild(squarePixel);
    }
  }
}

function getInputText() {
  let buttonVqv = document.getElementById('generate-board');

  buttonVqv.addEventListener('click', setAmountPixels);
  function setAmountPixels() {
    let myInput = parseInt(document.getElementById('board-size').value); 
    if ((myInput > 4) && (myInput < 51)) {
      lineBoardGeneration(myInput);
    } else {
      alert('Board inválido!');
    }
  }
}



function selectColor() {
  let getColor = document.getElementsByClassName('color');
  
  for (let index = 0; index < getColor.length; index += 1){
    getColor[index].addEventListener('click', changeClassSelected);
     function changeClassSelected(event) {
      for (let index = 0; index < getColor.length; index += 1) {
        getColor[index].className = 'color';
      }
      event.target.className = 'color selected';
    }
  }
}

selectColor();

function fillBlock() {
  let box = document.querySelectorAll('.pixel');
  
  for (let index = 0; index < box.length; index += 1) {
    box[index].addEventListener('click', colorBlock);
    function colorBlock(event) {
      let pickSelected = document.querySelector('.selected');
      let colorSelected = pickSelected.style.backgroundColor;
      event.target.style.backgroundColor = colorSelected;
    }
  }
}

fillBlock();

function cleanPixels(){
  let button = document.getElementById('clear-board');
  let boxes = document.querySelectorAll('.pixel');

  button.addEventListener('click', clear);
  function clear() {
    for (let index = 0; index < boxes.length; index += 1) {
      boxes[index].style.backgroundColor = 'white';
    }
  }
} 

cleanPixels();







