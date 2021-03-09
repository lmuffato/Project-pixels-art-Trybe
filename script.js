//Cria o quadro com 25 pixels
let cell = document.getElementById('pixel-board');
for (let line = 1; line <= 25; line += 1) {    
    let divPosition = document.createElement('div');
    divPosition.className = 'pixel'
    cell.appendChild(divPosition);    
}

//Deixa todos os pixels brancos quando a página carrega
let whitePixel = document.querySelectorAll('.pixel')
for (let index = 0; index <= whitePixel.length; index += 1) {
    whitePixel[index].style.backgroundColor = 'rgb(255, 255, 255)'
}