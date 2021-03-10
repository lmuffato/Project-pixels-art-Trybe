function addCliclListener() {
  const colorElement = document.getElementsByClassName('color');

  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].addEventListener('click', changeSelected);
  }
}

function changeSelected(eventOrigin) {
  const selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  const clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}

addCliclListener();
