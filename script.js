//Função para criar as divs da paleta de cores;
function paletteBox() {
    let colors = ['black', 'blue', 'green', 'yellow', 'red', 'cyan', 'brown']; //Cores da paleta
    let paletteSelect = document.getElementById('color-palette');//acessa a div mãe
    let baxesOut = [];
    for (let index = 0; index < colors.length; index += 1) {
        let paletteCreator = document.createElement('div'); //cria uma div
        paletteCreator.style.background = colors[index];
        paletteSelect.appendChild(paletteCreator).className = 'color'; //cria divs como filhas da div mãe

    }
    return boxOut;
}
paletteBox();
