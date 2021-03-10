addCliclListener();

function addCliclListener() {
  let colorElement = document.getElementsByClassName('color');

  for(key in colorElement) {
    colorElement[key].addEventListener('click', changeSelected);
  }
}

function changeSelected(eventOrigin) {
  let selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  let clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}
