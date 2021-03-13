let paletaDeCores = document.getElementsByClassName('color');

function clique(event) {
  let corSelecionada = event.target;
  let SelectAnterior = document.querySelector('.selected');
  SelectAnterior.classList.remove('selected');
  corSelecionada.classList.add('selected');
}

for (let index = 0; index < paletaDeCores.length; index += 1) {
  paletaDeCores[index].addEventListener('click', clique);
}
