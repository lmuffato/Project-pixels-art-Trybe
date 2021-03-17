function createPalettes(num) {
  for (let index = 0; index < num; index += 1) {
    const palettes = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes(4);

function paletteColor() {
  const pColor = document.getElementsByClassName('color');
  pColor[0].style.backgroundColor = 'black';
  pColor[1].style.backgroundColor = 'green';
  pColor[2].style.backgroundColor = 'yellow';
  pColor[3].style.backgroundColor = 'blue';
  pColor[0].classList.add('selected');
}
paletteColor();

function createPixels() {
  const pixelBox = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelC = document.createElement('div');
    pixelBox.appendChild(pixelC);
    for (let indexx = 0; indexx < 5; indexx += 1) {
      const pixelL = document.createElement('div');
      pixelC.appendChild(pixelL);
      pixelL.className = 'pixel';
    }
  }
}

createPixels();
function colorClick(){
  const colorClicking = document.getElementById('color-palette');
  colorClicking.addEventListener('click',(e) =>{
    const target1 = e.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index+=1){
      color[index].classList.remove('selected');
      if (target1.className === 'color') {
        target1.classList.add('selected');
      }
    }
  })
}
colorClick();

function painting(){
  const board = document.getElementById('pixel-board');
  board.addEventListener('click', (e)=>{
    const target1 = e.target;
  const targets = document.querySelector('.selected');
  if(target1.className === 'pixel'){
    target1.style.backgroundColor = targets.style.backgroundColor;
  }
  })
}
painting();

function clearBtn () {
  const btnReset = document.createElement('button');
  document.body.appendChild(btnReset);
  btnReset.innerText = 'Limpar';
  btnReset.id = 'clear-board';
  btnReset.addEventListener('click', ()=> {
    const color = document.getElementsByClassName('pixel');
    for (let index = 0; index<color.length; index+=1){
      color[index].style.backgroundColor = 'white';
    }
  })
}

clearBtn();