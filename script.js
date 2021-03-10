function selectColor() {
  let changeColor = document.querySelector('#color-palette')
  
  changeColor.addEventListener('click', function(event) {
    clearSelected();
    event.target.classList.add('selected')
  })
}

function clearSelected() {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
}

selectColor();