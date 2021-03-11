//requisito 4
function criaPixels (numberOfPixels) {
   for (let index = 0; index < numberOfPixels * numberOfPixels; index +=1) {
   const fazDiv = document.createElement('div');
   fazDiv.className = 'pixel tr';
   const divMae = document.getElementById('pixel-board');
  divMae.append(fazDiv);
}
}
criaPixels(5)

// Requisito 7 - Seleciona cor
function selecionaCor() {
   const cores = document.getElementsByClassName('color');

   for (let index = 0; index < cores.length; index += 1) {
   cores[index].addEventListener('click',() => {
      for (let i = 0; i < cores.length; i += 1) {
      cores[i] .classList.remove('selected');
      }
      cores[index].classList.add('selected');
  })
 }
}
 selecionaCor();

