//Cria o quadro com 25 pixels
let cell = document.getElementById('pixel-board');
for (let line = 1; line <= 25; line += 1) {    
    let divPosition = document.createElement('div');
    divPosition.className = 'pixel'
    cell.appendChild(divPosition);    
}