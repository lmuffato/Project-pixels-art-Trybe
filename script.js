// função para mudar o selected de lugar

// uma função para servir de add event listener
// uma função usando event.target
// uma função para o botão modificar o tamanho do quadro de pixels
// const clearPixelBoard = document.querySelector('.btn');
// função para armazenar a cor selecionada

// função que 'armazena' a cor clicada

// gera as cores aleatórias

function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}

// distribuição de cores aleatórias
function distributeRandomColors() {
  document.getElementById('green').style.backgroundColor = randomColors();
  document.getElementById('magenta').style.backgroundColor = randomColors();
  document.getElementById('blue').style.backgroundColor = randomColors();
}

window.onload = distributeRandomColors;
