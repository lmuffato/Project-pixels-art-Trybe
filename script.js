function escolherCor() {
  let paletaDeCores = document.getElementsByClassName('color');

  function clicar(event) {
    let corSelecionada = event.target;
    let UltimoSelect = document.querySelector('.selected');
    UltimoSelect.classList.remove('selected');
    corSelecionada.classList.add('selected');
  }

  for (let index = 0; index < paletaDeCores.length; index += 1) {
    paletaDeCores[index].addEventListener('click', clicar);

  } 

}
