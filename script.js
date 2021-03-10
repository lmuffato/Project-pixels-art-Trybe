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

selectColor();
