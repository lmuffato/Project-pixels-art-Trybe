const board = document.querySelector('#pixel-board');
for (let counter = 1; counter <= 25; counter += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  board.appendChild(pixel);
}
/* esse pedaço de codigo seguinte foi baseado no conteudo disponivel em 
https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('color')) {
        document.querySelector('.selected').classList.remove('selected')
        event.target.classList.add('selected')
    } 
});

/* para realizar os passos seguintes me baseei em
https://stackoverflow.com/questions/25238153/how-to-get-background-color-property-value-in-javascript */

document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.yellow').style.backgroundColor = 'yellow';
document.querySelector('.red').style.backgroundColor = 'red';
document.querySelector('.blue').style.backgroundColor = 'blue';
document.querySelector('#pixel-board').addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = selectedColor;
});

let button = document.createElement('button');
button.id = 'clear-board';
document.body.appendChild(button);
button.innerText = 'Reset';
button.addEventListener('click', function() {
    let pixels = document.querySelectorAll('.pixel');
    for (item of pixels) {
        item.style.backgroundColor = 'rgb(255, 255, 255)'
    }
})