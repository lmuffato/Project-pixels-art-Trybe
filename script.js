const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
window.addEventListener('load', function() {
    document.querySelector('.black').classList.add('selected')
});