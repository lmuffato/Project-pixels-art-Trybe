// Project Pixels Art

// Requirement 2
const colorPaletteSection = document.createElement('section');
colorPaletteSection.id = 'color-palette' 
document.body.appendChild(colorPaletteSection);

for (let index = 1; index <= 4; index +=1) {
    const colorPaletteDivs = document.createElement('div');
    colorPaletteDivs.className = ('color');
    colorPaletteDivs.style.display = 'inline-block';
    colorPaletteDivs.style.border = '1px solid black';
    colorPaletteDivs.style.width = '40px'
    colorPaletteDivs.style.height = '40px'
    colorPaletteSection.appendChild(colorPaletteDivs);
    if (index === 1) {
        colorPaletteDivs.style.backgroundColor = 'black' // Requirement 3
        colorPaletteDivs.className += ' selected'; // Requirement 6
        
    } if (index === 2) {
        colorPaletteDivs.style.backgroundColor = 'red' 
    } if (index === 3) {
        colorPaletteDivs.style.backgroundColor = 'yellow'
    } if (index === 4) {
        colorPaletteDivs.style.backgroundColor = 'orange'
    }
  }
  // Requirement 4 e 5
  const createTable = document.createElement('table');
  document.body.appendChild(createTable);
  createTable.id = 'pixel-board';

for (let index = 1; index <= 25; index += 1) {
  const divSquare = document.createElement('div');
  divSquare.style.display = 'inline-block';
  divSquare.style.width = '40px';
  divSquare.style.height = '40px';
  divSquare.style.border = '1px solid black';
  divSquare.style.marginTop = '0px';
  divSquare.style.marginBottom = '0px';
  divSquare.style.background = 'white';
  divSquare.className = 'pixel';
  createTable.appendChild(divSquare);
  if (index === 5) {
    divSquare.style.marginRight = '80%'
  } if (index === 10) {
    divSquare.style.marginRight = '80%'
  } if (index === 15) {
    divSquare.style.marginRight = '80%'
  } if (index === 20) {
    divSquare.style.marginRight = '80%'
  }
}
