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

document.getElementById('color-palette').addEventListener('click', function(selected) {
  const selectedColor = document.querySelector('.selected');
  const newSelected = selected.target;
  selectedColor.classList.remove('selected');
  newSelected.classList.add('selected');
});

document.getElementById('pixel-board').addEventListener('click', function(selectedPixel) {
  const color = document.querySelector('.selected').style.backgroundColor;
  selectedPixel.target.style.backgroundColor = color; 
});

document.getElementById('clear-board').addEventListener('click', function() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

pixelBoard(5);
