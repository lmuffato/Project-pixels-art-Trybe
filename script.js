function generateRandomColors() {
  const num = 4;
  for (let index = 0; index < num; index += 1) {
    const palette = document.querySelector('#color-palette');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';

    if (index === 0) {
      colorDiv.style.backgroundColor = 'black';
      colorDiv.classList.add('selected');
    } else {
      // eslint-disable-next-line max-len
      colorDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`;
    }
    palette.appendChild(colorDiv);
  }
}

generateRandomColors();


