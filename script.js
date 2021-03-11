// Requisito 7 //desenvolvido com ajuda dos colegas Patrick Morais, Nilson Ribeiro e Rafael Cardoso
function clearSelected() {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
}

function selectColor() {
  const changeColor = document.querySelector('#color-palette');
  
  changeColor.addEventListener('click', function(event) {
    clearSelected ();
    event.target.classList.add('selected')
  });
};

// Requisito 8 //desenvolvido com ajuda do colega Lucas Pedroso
function paintColor() {
  const paintBox = document.getElementById('pixel-board');
  
  paintBox.addEventListener('click', function (event) {
    event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    const a = document.querySelector('.selected');
    console.log(a.style.backgroundColor);
  });
}

selectColor();
paintColor();