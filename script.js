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
  const createDiv = document.createElement('div');
  const selectorH1 = document.querySelector('h1');
  createDiv.id = 'color-palette';
  selectorH1.appendChild(createDiv);
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
      createDiv.style.border = 'solid', 'black', '1px';
    } if (index === 2) {
      createDiv.style.backgroundColor = 'red';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid', 'black', '1px';
    } if (index === 3) {
      createDiv.style.backgroundColor = 'green';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid', 'black', '1px';
    } if (index === 4) {
      createDiv.style.backgroundColor = 'yellow';
      createDiv.style.height = '50px';
      createDiv.style.width = '50px';
      createDiv.style.border = 'solid', 'black', '1px';
    }
    selectorH1.appendChild(createDiv);
  }
}
createCollorsIntoPallete();
