const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
let colors = document.querySelectorAll('.color');
for (let item in colors) {
    colors[item].addEventListener('click', function() {
        document.querySelector('.selected').classList.remove('selected');
        colors[item].classList.add('selected')
    })
}