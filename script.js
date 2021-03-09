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
  const selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', toPaint);
}

const clearBtn = document.querySelector('button');
clearBtn.setAttribute('id', 'clear-board');
clearBtn.innerText = 'Limpar';

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

clearBtn.addEventListener('click', clear);
