document.getElementById('black').style.backgroundColor = 'black';
document.querySelector('#blue').style.backgroundColor = 'blue';
document.querySelector('#green').style.backgroundColor = 'green';
document.querySelector('#red').style.backgroundColor = 'red';

const colors = document.getElementsByClassName('color');

function deleteSelectedClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function setColor(e) {
  deleteSelectedClass();
  e.target.className += ' selected';
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', setColor);
}

const pixel = document.getElementsByClassName('pixel');

function toPaint(e) {
  let selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', toPaint);
}
