//  Depois de muitas tentativas, agora irei abandonar o HTML e só declarar os parents por lá. Seja o que Deus quiser!
//  Crio um table, adiciono com appendChild os td.
function boxColor() {
  const colorSection = document.getElementById('color-palette');
  const tableOfColors = document.createElement('table');
  colorSection.appendChild(tableOfColors);

  const totalOfBox = 4;
  for (let index = 0; index < totalOfBox; index += 1) {
    const tdOfTable = document.createElement('td');
    tdOfTable.className = 'color';
    tableOfColors.appendChild(tdOfTable);
  }

  const selectColorClass = document.querySelectorAll('.color');
  const colorsArr = ['black', 'green', 'red', 'purple'];
  for (let colorIndex = 0; colorIndex < colorsArr.length; colorIndex += 1) {
    selectColorClass[colorIndex].style.backgroundColor = colorsArr[colorIndex];
  }
  selectColorClass[0].className += ' selected';
};

function creatingPixels() {
  const pixelId = document.getElementById('pixel-board');
  const tableOfPixels = document.createElement('table');
  pixelId.appendChild(tableOfPixels);
  const totalPixel = 5;
  for (let trIndex = 0; trIndex < totalPixel; trIndex += 1) {
    const creatingTr = document.createElement('tr');
    for (let tdIndex = 0; tdIndex < totalPixel; tdIndex += 1) {
      const creatingTd = document.createElement('td');
      creatingTd.className = 'pixel';
      tableOfPixels.appendChild(creatingTr);
      creatingTr.appendChild(creatingTd);
    }
  }
};


// Chamando todas as funções no final para ficar mais clean.
window.onload = function() {
  boxColor();
  creatingPixels();
};

