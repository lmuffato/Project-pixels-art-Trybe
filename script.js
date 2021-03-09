// Requirement 1;

function createh1() {
  const createH1 = document.createElement('h1');
  const selectorBody = document.querySelector('body');
  createH1.id = 'title';
  createH1.innerHTML = 'Paleta de Cores';
  selectorBody.appendChild(createH1);
}
createh1();

// Requirement 2;

function createCollorPalette() {
  const selectorBody = document.querySelector('body');
  const createDiv = document.createElement('div');
  createDiv.id = 'color-palette';
  selectorBody.appendChild(createDiv);
}
createCollorPalette();

function createCollorsIntoPallete() {
  for (let index = 1; index <= 4; index += 1) {
    let createDiv = document.createElement('div');
    let selectorH1 = document.querySelector('#color-palette');
    createDiv.className = 'color';
    createDiv.style.display = 'inline-block';
    if (index === 1) {
      createDiv.style.backgroundColor = 'blue';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 2) {
      createDiv.style.backgroundColor = 'red';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 3) {
      createDiv.style.backgroundColor = 'green';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    } if (index === 4) {
      createDiv.style.backgroundColor = 'blue';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid 1px black';
    }
    selectorH1.appendChild(createDiv);
  }
}
createCollorsIntoPallete();

// Requirement 3;

function changeFirstCollorPalette() {
  let firstElementDivPalette = document.querySelectorAll('.color')[0];
  firstElementDivPalette.style.backgroundColor = 'black';
}
changeFirstCollorPalette();
