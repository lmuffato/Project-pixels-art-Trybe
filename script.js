const colorsList = ['', '', '', ''];

for (let index = 0; index < colorsList.length; index += 1) {
  colorsList[index] = document.createElement('div');
  colorsList[index].classList.add('color');
  document.querySelector('#color-pallete').appendChild(colorsList[index]);
}
document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'green';
document.getElementsByClassName('color')[2].style.backgroundColor = 'red';
document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';
