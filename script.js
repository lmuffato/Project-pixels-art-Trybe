//Requesito 2 e 3
let paletColors = ['black', '#14213d', '#fca311', '#e5e5e5'];
let tableColors = document.createElement('tr');
document.querySelector('table#color-palette').appendChild(tableColors);

for (let index = 0; index < paletColors.length; index += 1) {
  document.querySelector('tr').appendChild(document.createElement('td')).className = 'color';
  document.getElementsByClassName('color')[index].style.background = paletColors[index];
}

//Requesito 4 e 5
let amountFrame = 6

for (let index = 1; index < amountFrame; index += 1) {
  let framePixels = document.createElement('tr');
  document.getElementById('pixel-board').appendChild(framePixels);

  for (let counter = 1; counter < amountFrame; counter += 1) {
    document.getElementsByTagName('tr')[index].appendChild(document.createElement('td')).className = 'pixel';
  }
}

//Requesito 6
document.getElementsByTagName('td')[0].className += ' selected';