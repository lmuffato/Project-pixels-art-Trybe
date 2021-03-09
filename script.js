const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add('selected')
    } 
});
document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.yellow').style.backgroundColor = 'yellow';
document.querySelector('.red').style.backgroundColor = 'red';
document.querySelector('.blue').style.backgroundColor = 'blue';
document.querySelector('#pixel-board').addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
})
