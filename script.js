function setbkColor() {
  const colorsBlock = document.querySelectorAll('.color');
  const bkColor = ['black', 'midnightblue', 'gold', 'darkred'];
  for (let index = 0; index < colorsBlock.length; index += 1) {
    const color = bkColor[index];
    colorsBlock[index].style.backgroundColor = color;
  }
  return colorsBlock;
}

setbkColor();

function board() {
  const line = document.querySelectorAll('.line');
  console.log(line);
  for (let index = 0; index < line.length; index += 1) {
    for (let indexToo = 0; indexToo < line.length; indexToo += 1) {
      const pixels = document.createElement('div');
      pixels.setAttribute('class', 'pixel');
      line[index].appendChild(pixels);
    }
  }
}

board();
