const colors = document.querySelectorAll('.color');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'green';
colors[3].style.backgroundColor = 'blue';

function pixelBoard(number) {
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(pixel);
    }
  }
}

document.querySelector('#color-palette').addEventListener('click', (newSelected) => {
  const oldSelected = document.querySelector('.selected');
  oldSelected.classList.remove('selected');
  newSelected.target.classList.add('selected');
});

document.querySelector('#pixel-board').addEventListener('click', (paint) => {
  const color = document.querySelector('.selected').style.backgroundColor;
  const targeted = paint.target;
  targeted.style.backgroundColor = color;
});

document.querySelector('#clear-board').addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

pixelBoard(5);
