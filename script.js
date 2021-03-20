// Requisito 01
const bodY = document.querySelector('body');
const h1 = document.createElement('h1');
const headeR = document.createElement('header')
bodY.appendChild(headeR);
headeR.appendChild(h1);
h1.innerText = 'Paleta de Cores';
h1.id = 'title';

/*const black = document.querySelectorAll('.class')[0];
black.className += ' selected';