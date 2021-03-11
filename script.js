const createPalette = document.getElementById('color-palette');
const generateBoard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.querySelector('#pixel-board');

const cor1 = document.getElementsByClassName('color')[0];
const cor2 = document.getElementsByClassName('color')[1];
const cor3 = document.getElementsByClassName('color')[2];
const cor4 = document.getElementsByClassName('color')[3];
cor1.style.backgroundColor = 'black';

function randomRGB() {
  const r = Math.floor(Math.random() * (255));
  const g = Math.floor(Math.random() * (255));
  const b = Math.floor(Math.random() * (255));
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

cor2.style.backgroundColor = randomRGB();
cor3.style.backgroundColor = randomRGB();
cor4.style.backgroundColor = randomRGB();

cor1.addEventListener('click', () => {
  cor1.classList.toggle('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
  console.log('Cliquei no PRETO');
});

cor2.addEventListener('click', () => {
  cor2.classList.add('selected');
  cor1.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
  console.log('Cliquei na cor 2');
});


cor3.addEventListener('click', () => {
  cor3.classList.add('selected');
  cor2.classList.remove('selected');
  cor1.classList.remove('selected');
  cor4.classList.remove('selected');
  console.log('Cliquei na cor 3');
});


cor4.addEventListener('click', () => {
  cor4.classList.add('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor1.classList.remove('selected');
  console.log('Cliquei na cor 4');
});

function createBoard(lines, columns) {
  
  for (let index = 0; index < lines; index += 1) {
    const nLines = document.createElement('tr');
    pixelBoard.appendChild(nLines);
    for (let index = 0; index < columns; index += 1) {
      let nColumns = document.createElement('td')
      nLines.appendChild(nColumns);
      nColumns.className = 'pixel';
    }
  }
}
createBoard(5, 5)

let generate = document.querySelector('#generate-board');
  generate.addEventListener('click', () => {
  let inputNumber = document.getElementById('board-size');
  let linesNColumns = inputNumber.value;

  pixelBoard.innerHTML = ''

  if(inputNumber === '' && inputNumber <= 0) {
    window.alert('Board Inválido');
  }
  if(inputNumber < 5) {
    linesNColumns === 5
  } else if(inputNumber > 50) {
    linesNColumns === 50;
  }
  
  createBoard(linesNColumns, linesNColumns)
})

//nessa parte tive uma grande ajuda do Renzo Sevilla para reduzir o código e melhorar uns bugs que tava dando ao colorir todo o conteúdo do document
const pix = document.querySelectorAll('.pixel');
for (const pixer of pix) {
  pixer.addEventListener('click', fillPixel)
  function fillPixel(e) {
    e.target.style.backgroundColor = chooseColor();
  }
}

function chooseColor() {
  const selection = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(selection, null).getPropertyValue("background-color");
  return bgColor;
}

// consultei o pullRequest https://github.com/tryber/sd-010-a-project-pixels-art/pull/119/files 
// para obter uma idéia de como fazer essa parte abaixo e então percebi que o pix recebe um Array
// com todos os elementos de class pixel. Logo eu teria que fazer um loop para percorrê-lo.
// O Jodial usou um for simples. Eu pesquisei no canal do CFB Cursos e aprendi sobre a utilização 
// do for of.
  const clear = document.getElementById('clear-board');
  clear.addEventListener('click', () => {
  for (const pixels of pix) {
    pixels.style.backgroundColor = 'white';
    console.log('Cliquei no Limpar');
  }
})
