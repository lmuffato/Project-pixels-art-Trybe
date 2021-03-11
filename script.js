// Project Pixels Art

// Requirement 2
const colorPaletteSection = document.createElement('section');
colorPaletteSection.id = 'color-palette' 
document.body.appendChild(colorPaletteSection);

for (let index = 1; index <= 4; index++) {
    const colorPaletteDivs = document.createElement('div');
    colorPaletteDivs.className = ('color');
    colorPaletteDivs.style.display = 'inline-block';
    colorPaletteDivs.style.border = '1px solid black';
    colorPaletteDivs.style.width = '40px'
    colorPaletteDivs.style.height = '40px'
    colorPaletteSection.appendChild(colorPaletteDivs);
    if (index === 1) {
        colorPaletteDivs.style.backgroundColor = 'black'
    } if (index === 2) {
        colorPaletteDivs.style.backgroundColor = 'red' 
    } if (index === 3) {
        colorPaletteDivs.style.backgroundColor = 'yellow'
    } if (index === 4) {
        colorPaletteDivs.style.backgroundColor = 'orange'
    }
  }