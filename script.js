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

})

element2.addEventListener('click', () => {
  element2.classList.add('selected');
  element1.classList.remove('selected');
  element3.classList.remove('selected');
  element4.classList.remove('selected');
  console.log('Cliquei no VERMELHO');
})
console.log(element2);

element3.addEventListener('click', () => {
  element3.classList.add('selected');
  element2.classList.remove('selected');
  element1.classList.remove('selected');
  element4.classList.remove('selected');
  console.log('Cliquei no AZUL');
})
console.log(element3);

element4.addEventListener('click', () => {
  element4.classList.add('selected');
  element2.classList.remove('selected');
  element3.classList.remove('selected');
  element1.classList.remove('selected');
  console.log('Cliquei no VERDE');
})
console.log(element4);

function chooseColor() {
  const selection = document.querySelector('.selected');
  let bgColor = window.getComputedStyle(selection, null).getPropertyValue("background-color");
  return bgColor;
  
}

document.addEventListener('click', clique);
function clique(e){
  let section = document.querySelector('section');
  let header = document.querySelector('header');
  let body = document.querySelector('body');
  let h1 = document.querySelector('h1');
  if (e.target !== body && e.target !== header && e.target !== section && e.target !== h1){
 e.target.style.backgroundColor = chooseColor();
  }
};

