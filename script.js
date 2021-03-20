// Requisito 01
let titulo = document.createElement('title');
let heaD = document.querySelector('head');
heaD.appendChild(titulo);
let h1 = document.createElement('h1');
titulo.appendChild(h1);
h1.innerText = 'Paleta de Cores';
h1.id = 'title';


const black = document.querySelectorAll('.class')[0];
black.className += ' selected';