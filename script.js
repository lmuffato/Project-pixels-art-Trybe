function createPalette() {
  const paletteItems = ['black', 'blue', 'yellow', 'green'];
  const getPalette = document.getElementById('color-palette');

  for (let index = 0; index < paletteItems.length; index += 1) {
    const cellPalette = document.createElement('div');

    cellPalette.className = 'color';
    cellPalette.style.backgroundColor = paletteItems[index];
    cellPalette.style.display = 'inline-block';

    getPalette.appendChild(cellPalette);
  }
}

createPalette();

function createTr() {
  const getBoard = document.getElementById('pixel-board');
  for(let index = 0; index < 5; index += 1){
    const divTr = document.createElement('div');
    divTr.className = ('linha'+ index);
    divTr.className += ' div-tr';
    getBoard.appendChild(divTr); 
  }

  createPixel();
   
}

createTr();

function createPixel() {
  // const getLines = document.getElementsByClassName('div-tr');
  const getLines = document.getElementById('pixel-board').childNodes;
  for (let index = 0; index < getLines.length; index += 1) {

    let getTr = getLines[index];
    for (let i = 0; i < getLines.length; i += 1) {

      let createCell = document.createElement('div');
      createCell.className = 'pixel';

      getTr.appendChild(createCell);

    }
  }

}


//criar evento do clique

// armazenar em sessionstorage ? a cor do clique

// evento: clique.

// clique p

// taget/type pra idetificar quem chamou o evento?


// 'pintar' com valor armazenado em local storage