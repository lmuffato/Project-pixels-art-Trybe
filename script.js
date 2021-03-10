window.onload = function () {
  const color = ['black', 'red', 'blue', 'yellow'];
  function colorButton() {
    const colorBlock = document.querySelectorAll('.color');
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].style.background = color[index];
    }
  }
  function selectColor() {
    document.querySelectorAll('.color')[0].classList.add("selected");
  }
  colorButton();
  selectColor();
}