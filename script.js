let colorFirst = document.querySelectorAll('div')[1];
colorFirst.style.backgroundColor = 'red';

let colorSecond = document.querySelectorAll('div')[2];
colorSecond.style.backgroundColor = 'green';

let colorThird = document.querySelectorAll('div')[3];
colorThird.style.backgroundColor = 'blue';

let colorFourth = document.querySelectorAll('div')[4];
colorFourth.style.backgroundColor = 'yellow';

colorFirst.style.backgroundColor = 'black';

let framePixel = document.getElementById('pixel-board');

for (i = 1; i <= 25; i +=1 ) {
   let pixel = document.createElement('div');
   pixel.className = 'pixel';

   framePixel.appendChild(pixel);
}

let classColor = document.querySelectorAll('.color');
function clean() {
    for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].classList.remove('selected') 
   
   }      
}

for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].addEventListener('click',(clique)=>{ 
    clean()
    clique.target.classList.add('selected')

    })
}