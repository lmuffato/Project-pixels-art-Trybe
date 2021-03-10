const color = ['black', 'red', 'blue', 'yellow'];
let old = 0;

window.onload = function init() {
  function colorButton() {
    const colorBlock = document.querySelectorAll('.color');
    for (let index = 0; index < colorBlock.length; index += 1) {
      colorBlock[index].style.background = color[index];
      colorBlock[index].addEventListener("click", selectColor);
    }
  }

  colorButton();

}

function selectIndex(colorIndex){
  for (let index = 0; index < color.length; index += 1) {
    if (colorIndex === color[index]) {
      return index;
    }
  }
}

function selectColor(e) {
  let select = e.target.style.background;
  let index = selectIndex(select);
  document.querySelectorAll('.color')[index].classList.add("selected");
  document.querySelectorAll('.color')[old].classList.remove("selected");
  old = index;
  document.querySelectorAll('.selected')[0].style.background = select;
}