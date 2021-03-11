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

//function line(numberOfPixels) {
  // const line = 5;
   //for (let index = 0; index < = 5; index + 1)

//}

// Requisito 7 - Seleciona cor
function selecionaCor() {
   const cores = document.getElementsByClassName('color');
   for (let index = 0; index <= cores.length; index +1);
   cores.addEventListener('click',() => {
      for (let colorPallete = 0; i <= colorPallete.length; i + 1) {
      cores[colorPallete] .classList.remove('selected');
   }
   cores [index].classList.add('selected');
})
selecionaCor()
}


// reqisito 9

//let clean = document.getElementById('clear-board');
//let pixels = document.getElementsByClassName('pixel');
//clean.addEventListener('click', clean) ; {
   // pixels.style.backgroundColor = "white";
//} 


