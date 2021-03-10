// Cria o quadro com 25 pixels
let cell = document.getElementById('pixel-board');
for (let line = 1; line <= 25; line += 1) {    
    let divPosition = document.createElement('div');
    divPosition.className = 'pixel';
    cell.appendChild(divPosition);    
}

// Clicar em uma das cores da paleta faz com que ela seja selecionada
let colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function(e) {
        let currentSelected = document.querySelector('.selected')
        currentSelected.classList.remove('selected')
        let selection = e.target.className += ' selected '
    })
}