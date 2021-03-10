//Requisito 7
function clearSelected() {
  let colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
} 

function selectColor() {
  const changeColor = document.querySelector('#color-palette')
  
  changeColor.addEventListener('click', function(event) {
    clearSelected();
    event.target.classList.add('selected')
  })
}

//Requisito 8
function paintColor() {
  const paintBox = document.querySelector('#pixel-board')
  
  paintBox.addEventListener('click', function(event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  })
}

selectColor();
paintColor();

