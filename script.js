let colorClick = document.getElementsByClassName('color-palette');


function remSelected (event) {
  let changeColor = document.querySelector('.color');
  for (let index; index <= changeColor.length; index += 1) {
    changeColor[index].classList.remove('selected');
  }
    let classColor = event.target.classList.add("selected");
}
  colorClick = addEventListener('click', remSelected);



