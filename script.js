const colorSelector = document.querySelectorAll('.color');

for (let index = 0; index < colorSelector.length; index += 1) {
  colorSelector[index].addEventListener('click', addSelected);
}

function addSelected(event) {
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}
