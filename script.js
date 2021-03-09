for (let index = 0; index < 4; index += 1) {
  const coresPaletas = document.createElement('li');
  document.getElementById('color-palette').appendChild(coresPaletas).style.listStyle = 'none';
  coresPaletas.className = 'color';
}
const adicionandoCores = document.getElementsByClassName('color');
adicionandoCores[0].style.backgroundColor = 'red';
adicionandoCores[0].innerHTML = 'red';
adicionandoCores[1].style.backgroundColor = 'blue';
adicionandoCores[1].innerHTML = 'blue';
adicionandoCores[2].style.backgroundColor = 'purple';
adicionandoCores[2].innerHTML = 'purple';
adicionandoCores[3].style.backgroundColor = 'gray';
adicionandoCores[3].innerHTML = 'gray';
