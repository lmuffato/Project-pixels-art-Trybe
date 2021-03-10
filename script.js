const colors = document.querySelectorAll('.color');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'green';
colors[3].style.backgroundColor = 'blue';

function pixelBoard (number) {
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel'
      document.querySelector('#pixel-board').appendChild(pixel);
    }
  }
}

pixelBoard(5);
