function paleta(){
  for (let index = 1; index <= 4; index += 1){
  const tagDiv = document.createElement('div');
  const tagPai = document.querySelector('#color-palette');
    tagPai.appendChild(tagDiv);
    tagDiv.classList.add('color')
  }
}
paleta();

function coresDaTabela(){
  const cores = document.getElementsByClassName('color');
  cores[0].style.backgroundColor = 'red'
  cores[1].style.backgroundColor = 'blue'
  cores[2].style.backgroundColor = 'pink'
  cores[3].style.backgroundColor = 'green'
}
coresDaTabela();
