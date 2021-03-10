// REQUISITO 7: //
// A classe selected deve ser ADICIONADA à cor selecionada na paleta e ao mesmo tempo removida da cor ANTERIORMENTE selecionada. //
// os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color//

function colorPallet() {
  const getColor = document.getElementsByClassName('.color'); // para selecionar todos os elementos da classe //

  for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].addEventListener('click', getClick);
  }
  function getClick() {
    for (let index = 0; index < getColor.length; index += 1) {
    getColor[index].classList.remove('selected');
    }
    this.classList.add('selected');
  }   
}  

window.onload = function () {
  colorPallet();
};
