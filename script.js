window.onload = function () {
  const color = ['black', 'red', 'blue', 'yellow'];
  function colorButton() {
    const colorBlock = document.querySelectorAll('.color');
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].style.background = color[index];
    }
  }
  function selectColor(next, old) {
    document.querySelectorAll('.color')[next].classList.add("selected");
    document.querySelectorAll('.color')[old].classList.remove("selected");
  }
  colorButton();
  selectColor(2, 0);
}