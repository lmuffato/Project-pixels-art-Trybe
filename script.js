window.onload = function() {
  const color = ['black', 'red', 'blue', 'yellow'];
  colorButton();
  function colorButton() {
    const colorBlock = document.querySelectorAll('.color');
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].style.background = color[index];
    }
  }
}