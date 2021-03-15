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

function pintaPixels() {
   const pixel = document.querySelector('.pixel tr');
   for(i = 0; i <= pixel.length; i += 1); {
      pixel[i].addEventListener('click', (event) => {
      const clickedPixel = event.target;
      const cor = documento.querySelector('.selected').style.backgroundColor;
      console.log(color)
      clickedPixel.style.backgroundColor = color;
      })
   }   

}



//function setColor() {
 //  const pixelTable = document.querySelector('#pixel-board');
  // pixelTable.addEventListener('click', (event) => {
   //  const selectPixel = event.target;
   //  const color = document.querySelector('.selected').style.backgroundColor;
     // console.log(color)
     //selectPixel.style.backgroundColor = color;

// Requisito 9 - Limpa board
function limpaQuadro () {
const botao = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel tr');

   botao.addEventListener('click', () => {
      for (let index = 0; index < pixels.length; i += 1) {
      pixels[index].style.backgroundColor = 'white';
      }

   })
}
