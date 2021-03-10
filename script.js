
function addCliclListener() {
  const colorElement = document.getElementsByClassName('color');

  for (let key in colorElement) {
    colorElement[key].addEventListener('click', changeSelected);
  }
}

function changeSelected(eventOrigin) {
  const selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  const clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}

addCliclListener();