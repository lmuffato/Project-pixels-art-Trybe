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


// reqisito 9

//let clean = document.getElementById('clear-board');
//let pixels = document.getElementsByClassName('pixel');
//clean.addEventListener('click', clean) ; {
   // pixels.style.backgroundColor = "white";
//} 
