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

function clearSelect(e) {
  const evtId = e.target.id;
  if (evtId !== 'color-palette') {
    const pastSelected = document.querySelector('.selected');
    pastSelected.className = 'color';
    e.target.className = 'color selected';
  }
}

const selectColor = document.querySelector('#color-palette');
selectColor.addEventListener('click', clearSelect);
