const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
const colors = document.querySelectorAll('.color');
let selected = document.querySelector('.selected')
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add('selected')
    }
    else if (event.target.classList.contains('pixel')) {
        console.log(selected)
    }
})