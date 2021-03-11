// REQUISITO 2 - CRIAR ID COLOR-PALLET //

function createElementLi() {
  for (let index = 0; index < 4; index += 1) { // para criar 4 cores //
    const createElement = document.createElement('li'); // criando elemento li na ul //
    document.getElementById('color-palette').appendChild(createElement).style.listStyle = 'none'; // display none //
    createElement.className = 'color';
  }
}
createElementLi();

// REQUISITO 3 - PALETA DE CORES - A PRIMEIRA COR DEVE SER PRETA//

function addColors() {
  const addPaetteColor = document.getElementsByClassName('color');
  addPaetteColor[0].style.backgroundColor = 'blue';
  addPaetteColor[0].style.backgroundColor = 'red';
  addPaetteColor[0].style.backgroundColor = 'yellow';
  addPaetteColor[0].style.backgroundColor = 'orange';
}
addColors();

function firstColor() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
}
firstColor();

// REQUISITO 4 - CRIAR PIXEL-BOARD 5 ELEMENTOS COM 25PX //

function pixelBoard(list) {
  const creatDiv = document.createElement('div');
  document.body.appendChild(creatDiv);
  creatDiv.id = 'pixel-board';
  for (let index = 1; index <= list; index += 1) {
    const createdList = document.createElement('ul');
    document.querySelector('div').appendChild(createdList);
    for (let index1 = 1; index1 <= list; index1 += 1) {
      const created = document.createElement('li');
      createdList.appendChild(created);
      createdList.classList = 'pixel';
    }
  }
}
pixelBoard(5);

// REQUISITO 6 - DEFINIR A COR PRETA COMO INICIAL //

document.getElementsByClassName('color')[0].classList.add('selected');

// REQUISITO 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.//

function colorPallet() {
  const getColor = document.getElementById('color-palette');
  // pega todas as propriedades do evento, para não escrever o nome da função //
  getColor.addEventListener('click', (event) => {
    const colorChange = event.target;
    const selectElement = document.querySelector('.selected');
    colorChange.classList.add('selected');
    selectElement.classList.remove('selected');
  });
}
colorPallet();
