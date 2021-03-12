// 4 - Adicione à página um quadro de pixels, com 25 pixels.
const colorBlocks = document.querySelector('#pixel-board');
const n = 5;
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  const block = document.createElement('div');
  colorBlocks.appendChild(block);
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    const Vblocks = document.createElement('div');
    block.appendChild(Vblocks);
    Vblocks.classList = 'pixel';
  }
}

// 6 - Defina a cor preta como cor inicial. Ao carregar a página a cor preta já deve estar selecionada para pintar os pixels
document.querySelectorAll('.color')[0].classList.add('selected');

// 7 - Clicar em uma das cores da paleta, faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
function colorSet(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  selectedColor.classList.remove('selected');
  const newSelection = event.target;
  newSelection.classList.add('selected');
}

const colorPannel = document.getElementsByClassName('color');
for (let index = 0; index < colorPannel.length; index += 1) {
  colorPannel[index].addEventListener('click', colorSet);
}

function PaintingPixel(event) {
  const getClassSelected = document.getElementsByClassName('selected')[0];
  const eventTarget = event.target;
  let setColorPixel;
  setColorPixel = window.getComputedStyle(getClassSelected).getPropertyValue('background-color');
  eventTarget.style.backgroundColor = setColorPixel;
}