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

function lineBoardGeneration() {
  const tableContainer = document.getElementById('pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const lineConteiner = document.createElement('tr');
    lineConteiner.className = 'line-container';
    tableContainer.appendChild(lineConteiner);
  }
}

lineBoardGeneration();

function columnBoardGeneration() {
  const lineContainer = document.getElementsByClassName('line-container');

  for (let line = 0; line < lineContainer.length; line += 1) {
    for (let index = 0; index < 5; index += 1) {
      const squarePixel = document.createElement('td');
      squarePixel.className = 'pixel';
      lineContainer[line].appendChild(squarePixel);
    }
  }
}

columnBoardGeneration();

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


