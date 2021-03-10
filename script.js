function quadrado() {
  const elementDiv = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const elementsDiv = document.createElement('div');
    elementsDiv.className = 'pixel';
    elementDiv.appendChild(elementsDiv);
  }
}

window.addEventListener('load', quadrado);
