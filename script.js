let colorFirst = document.querySelectorAll('div')[1]
colorFirst.style.backgroundColor = 'red';

let colorSecond = document.querySelectorAll('div')[2]
colorSecond.style.backgroundColor = 'green';

let colorThird = document.querySelectorAll('div')[3]
colorThird.style.backgroundColor = 'blue';

let colorFourth = document.querySelectorAll('div')[4]
colorFourth.style.backgroundColor = 'yellow';

colorFirst.style.backgroundColor = 'black';

let framePixel = document.getElementById('pixel-board');

for (i = 1; i <= 25; i +=1 ) {
   let pixel = document.createElement('div')
   pixel.className = 'pixel'

   framePixel.appendChild(pixel)
}






