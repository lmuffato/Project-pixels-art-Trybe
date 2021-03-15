function createPalette () {
  let paletteItems = ['red', 'blue', 'yellow', 'green'];
  let getPaleta = document.getElementById("color-palette");
  
  for (let index = 0; index < paletteItems.length; index += 1) {

    let createPalette = document.createElement("div");
    createPalette.className = 'color';
    
    createPalette.style.backgroundColor = paletteItems[index];
    createPalette.style.display = 'inline-block';
    createPalette.style.alignItems = 'space-between';

    getPaleta.appendChild(createPalette);
   
  }
};

createPalette();


//criar evento do clique

// armazenar em sessionstorage ? a cor do clique

// evento: clique.

// clique p

// taget/type pra idetificar quem chamou o evento?


// 'pintar' com valor armazenado em local storage