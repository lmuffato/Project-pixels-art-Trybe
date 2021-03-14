//requisito 4 - Cria pixels
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

// Requisito 8 - Pinta pixels
//function pintaPixels() {
  // const cores =  document.getElementsByClassName('color');
   //const pixels = document.getElementsByClassName('pixel tr');
//percorre quadro e adiciona o clique:
   //for (let index = 0; index <pixels.length; i += 1) {
      //pixels[index].addEventListener('click', () => }
    //  pixels[index].
      
      
 //  })
 
// Requisito 9 - Limpa board
function limpaQuadro () {
let botao = document.getElementById('clear-board');
let pixels = document.getElementsByClassName('pixel tr');

for (let index = 0; index <pixels.length; i += 1) {
   pixels[index].addEventListener('click', () => {
      let apagar = pixels[index];
      apagar.style.backgroundColor = 'rgb(0,128,0)'
      })

}
}