const element1 = document.getElementsByClassName('color')[0];
const element2 = document.getElementsByClassName('color')[1];
const element3 = document.getElementsByClassName('color')[2];
const element4 = document.getElementsByClassName('color')[3];

// window.onload () => {
// element1.classList.add('selected');

element1.addEventListener('click', () => {
  element1.classList.add('selected');
  element2.classList.remove('selected');
  element3.classList.remove('selected');
  element4.classList.remove('selected');
  console.log('Cliquei no PRETO');
});

element2.addEventListener('click', () => {
  element2.classList.add('selected');
  element1.classList.remove('selected');
  element3.classList.remove('selected');
  element4.classList.remove('selected');
  console.log('Cliquei no VERMELHO');
});
console.log(element2);

element3.addEventListener('click', () => {
  element3.classList.add('selected');
  element2.classList.remove('selected');
  element1.classList.remove('selected');
  element4.classList.remove('selected');
  console.log('Cliquei no AZUL');
});
console.log(element3);

element4.addEventListener('click', () => {
  element4.classList.add('selected');
  element2.classList.remove('selected');
  element3.classList.remove('selected');
  element1.classList.remove('selected');
  console.log('Cliquei no VERDE');
});
console.log(element4);

function chooseColor() {
  const selection = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(selection, null).getPropertyValue("background-color");
  return bgColor;
}


document.addEventListener('click', fillPixel);
function fillPixel(e){
  const section = document.querySelector('section');
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const button = document.querySelector('button');
  if (e.target !== body && e.target !== header && e.target !== section && e.target !== h1 && e.target !== button){
    e.target.style.backgroundColor = chooseColor();
  };
}
  const clear = document.getElementById('clear-board');

  clear.addEventListener('click', cleaning)

  function cleaning() {
  let pix = document.querySelectorAll('.pixel');
  // consultei o pullRequest https://github.com/tryber/sd-010-a-project-pixels-art/pull/119/files 
  // para obter uma idéia de como fazer essa parte abaixo e então percebi que o pix recebe um Array
  // com todos os elementos de class pixel. Logo eu teria que fazer um loop para percorrê-lo.
  // O Jodial usou um for simples. Eu pesquisei no canal do CFB Cursos e aprendi sobre a utilização 
  // do for of.
  for (let pixels of pix){
    pixels.style.backgroundColor = 'white'
    console.log('Cliquei no Limpar');
  }
};