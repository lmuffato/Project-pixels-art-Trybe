const colorList = document.querySelectorAll('.color');
function colorPanel() {
  for (let index = 0; index < 4; index += 1) {
    colorList[0].style.backgroundColor = 'black';
    colorList[0].classList.add('selected');
    colorList[1].style.backgroundColor = 'yellow';
    colorList[2].style.backgroundColor = 'red';
    colorList[3].style.backgroundColor = 'green';
  }
}
colorPanel();