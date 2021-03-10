// Requisito 2;
function creatPaddles() {
  for (let index = 0; index < 4; index += 1) {
    const creatPaddless = document.createElement('li');
    document.getElementById('color-palette').appendChild(creatPaddless).style.listStyle = 'none';
    creatPaddless.className = 'color';
  }
}
creatPaddles();
function colorsPaddles() {
  const adicionandoCores = document.getElementsByClassName('color');
  adicionandoCores[0].style.backgroundColor = 'red';
  adicionandoCores[1].style.backgroundColor = 'blue';
  adicionandoCores[2].style.backgroundColor = 'purple';
  adicionandoCores[3].style.backgroundColor = 'gray';
}
colorsPaddles();
// Requisito 3;
function colorBlack() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
}
colorBlack();
// Requisito 4;
function pixelPainting(size) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  div.id = 'pixel-board';
  for (let index = 1; index <= size; index += 1) {
    const created = document.createElement('ul');
    document.querySelector('div').appendChild(created);
    for (let index1 = 1; index1 <= size; index1 += 1) {
      const createdList = document.createElement('li');
      created.appendChild(createdList);
      createdList.classList = 'pixel';
    }
  }
}
pixelPainting(5);

// Requisito 5;

// Requisito 6;
document.getElementsByClassName('color')[0].classList.add('selected');

// Requisito 7;
// Ajuda do Murilo Gonçalves na explicação sobre o e
function changeClass() {
// Cria variavel;
  const elementColors = document.getElementById('color-palette');
  // Cria um evento;
  elementColors.addEventListener('click', (e) => {
    const colorElement = e.target;
    const selectElement = document.querySelector('.selected');
    selectElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
changeClass();
// Ajuda do Murilo Gonçalves
function clickColor() {
  const selectBoard = document.getElementById('pixel-board');
  selectBoard.addEventListener('click', (e) => {
    const pixel = e.target;
    if (pixel.localName === 'li') {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      pixel.style.backgroundColor = colorSelected;
    }
  });
}
clickColor();

function buttonClear(name) {
  const button = document.createElement('button');
  document.body.appendChild(button);
  button.id = 'clear-board';
  button.innerText = name;
  button.addEventListener('click', () => {
    const clear = document.getElementsByClassName('pixel');
    for (let index = 0; index < clear.length; index += 1) {
      clear[index].style.backgroundColor = 'white';
    }
  });
}
buttonClear('Limpar');
