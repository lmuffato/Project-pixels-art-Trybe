function createPalette () {
  let paletteItems = ['red', 'blue', 'yellow', 'green'];
  let getPaleta = document.getElementById("color-palette");
  
  for (let index = 0; index < paletteItems.length; index += 0) {

    let createPalette = document.createElement("div");
    createPalette.className = 'color';
    
    createPalette.style.backgroundColor = paletteItems[index];

    getPaleta.appendChild(createPalette);
   
  }
}


createPalette();