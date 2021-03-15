function createPalette() {
  const paletteItems = ['red', 'blue', 'yellow', 'green'];
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

//criar evento do clique

// armazenar em sessionstorage ? a cor do clique

// evento: clique.

// clique p

// taget/type pra idetificar quem chamou o evento?


// 'pintar' com valor armazenado em local storage