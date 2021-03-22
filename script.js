function selectColor() {
  const listItemElements = document.getElementsByClassName('color');

  for (let index = 0; index < listItemElements.length; index += 1) {
    listItemElements[index].addEventListener('click', () => {
      for (
        let insideIndex = 0;
        insideIndex < listItemElements.length;
        insideIndex += 1
      ) {
        listItemElements[insideIndex].classList.remove('selected');
      }

      listItemElements[index].classList.add('selected');
    });
  }
}

function setBackground(element) {
  const pixelElement = element;
  const selectElement = document.getElementsByClassName('selected')[0];
  if (selectElement.classList.contains('background-black')) {
    pixelElement.style.backgroundColor = 'black';
  } else if (selectElement.classList.contains('background-red')) {
    pixelElement.style.backgroundColor = 'red';
  } else if (selectElement.classList.contains('background-blue')) {
    pixelElement.style.backgroundColor = 'blue';
  } else if (selectElement.classList.contains('background-yellow')) {
    pixelElement.style.backgroundColor = 'yellow';
  }

  return pixelElement;
}

function drawColor() {
  const pixelsListElements = document.getElementsByClassName('pixel');

  for (
    let elementIndex = 0;
    elementIndex < pixelsListElements.length;
    elementIndex += 1
  ) {
    const pixelElement = pixelsListElements[elementIndex];
    pixelElement.addEventListener('click', () => setBackground(pixelElement));
  }
}

function clearButton() {
  const buttonElement = document.getElementById('clear-board');
  const pixelBoardItems = document.getElementsByClassName('pixel');

  buttonElement.addEventListener('click', () => {
    for (let index = 0; index < pixelBoardItems.length; index += 1) {
      pixelBoardItems[index].style.backgroundColor = 'white';
    }
  });
}

function createPixel() {
  const pixelElement = document.createElement('li');
  pixelElement.className = 'pixel';
  pixelElement.addEventListener('click', () => setBackground(pixelElement));

  return pixelElement;
}

function drawPixels(input) {
  const lineInput = input;
  if (!lineInput.value) {
    alert('Board inválido!');
    return;
  }
  let lineInputValue = lineInput.value < 5 ? 5 : lineInput.value;
  lineInput.value > 50 ? (lineInput.value = 50) : lineInput.value;
  const pixelBoardElement = document.getElementById('pixel-board');
  pixelBoardElement.innerHTML = '';
  for (let index = 0; index < lineInputValue; index += 1) {
    const lineContainer = document.createElement('div');
    lineContainer.className = 'line';
    for (let pixels = 0; pixels < lineInputValue; pixels += 1) {
      const pixelElement = createPixel();
      lineContainer.appendChild(pixelElement);
    }
    pixelBoardElement.appendChild(lineContainer);
  }
}

function drawPicture() {
  const generateBoardButton = document.getElementById('generate-board');
  const lineInput = document.getElementById('board-size');

  generateBoardButton.addEventListener('click', () => drawPixels(lineInput));
}

selectColor();
drawColor();
clearButton();
drawPicture();
