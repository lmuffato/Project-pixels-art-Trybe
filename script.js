let colorClick = document.getElementById('color-palette');

function remSelected (event) {
  const changeColor = document.querySelector('.color');
  for (let index; index <= changeColor.length; index += 1) {
    changeColor[index].classList.remove('selected');
  }
  const classColor = event.target.classList.add("selected");

colorClick = addEventListener('click', remSelected);
}