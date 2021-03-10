function selectColor() {
  const listItemElements = document.getElementsByClassName('color');

  for (let index = 0; index < listItemElements.length; index += 1) {
    listItemElements[index].addEventListener('click', () => {
      for (let insideIndex = 0; insideIndex < listItemElements.length; insideIndex += 1) {
        listItemElements[insideIndex].classList.remove('selected');
      }

      listItemElements[index].classList.add('selected');
    });
  }
}

function drawColor() {
  const pixelsListElements = document.getElementsByClassName('pixel');

  for (let elementIndex = 0; elementIndex < pixelsListElements.length; elementIndex += 1) {
    pixelsListElements[elementIndex].addEventListener('click', () => {
      const selectElement = document.getElementsByClassName('selected')[0];
      if (selectElement.classList.contains('background-black')) {
        pixelsListElements[elementIndex].style.backgroundColor = 'black';
      } else if (selectElement.classList.contains('background-red')) {
        pixelsListElements[elementIndex].style.backgroundColor = 'red';
      } else if (selectElement.classList.contains('background-blue')) {
        pixelsListElements[elementIndex].style.backgroundColor = 'blue';
      } else if (selectElement.classList.contains('background-yellow')) {
        pixelsListElements[elementIndex].style.backgroundColor = 'yellow';
      }
    });
  }
}

selectColor();
drawColor();
