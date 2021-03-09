let paletColors = ['black', '#14213d', '#fca311', '#e5e5e5'];
let tableColors = document.createElement('tr');
document.querySelector('table#color-palette').appendChild(tableColors);

for (let index = 0; index < paletColors.length; index += 1) {
  document.querySelector('tr').appendChild(document.createElement('td')).className = 'color';
  document.getElementsByClassName('color')[index].style.background = paletColors[index];
}

