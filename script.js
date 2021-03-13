function paleta() {
  for (let index = 1; index <= 4; index += 1) {
    const tagDiv = document.createElement('div');
    const tagPai = document.querySelector('#color-palette');
    tagPai.appendChild(tagDiv);
    tagDiv.classList.add('color')
  }
}
paleta();

function coresDaTabela() {
  const cores = document.getElementsByClassName('color');
  cores[0].style.backgroundColor = 'black'
  cores[1].style.backgroundColor = 'blue'
  cores[2].style.backgroundColor = 'pink'
  cores[3].style.backgroundColor = 'green'
}
coresDaTabela();

function quadroDePixels() {
  for (let index = 1; index <= 5; index += 1) {
    const pixelsPai = document.createElement('div');
    const tagPai = document.getElementById('pixel-board');
    tagPai.appendChild(pixelsPai);
    for (let index = 1; index <= 5; index += 1) {
      const pixels = document.createElement('div');
      pixelsPai.appendChild(pixels);
      pixels.classList.add('pixel')
    }
  }
}
quadroDePixels();

function corBlack(){
  const corBlack1 = document.getElementsByClassName('color')[0].classList.add('selected');
}
corBlack();

