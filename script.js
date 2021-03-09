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
