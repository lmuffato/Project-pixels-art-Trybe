const element1 = document.getElementsByClassName('color')[0]
const element2 = document.getElementsByClassName('color')[1]
const element3 = document.getElementsByClassName('color')[2]
const element4 = document.getElementsByClassName('color')[3]


element1.addEventListener('click', () => {
  console.log('Cliquei no preto');
  //handle click
})
console.log(element1)

element2.addEventListener('click', () => {
  console.log('Cliquei no vermelho');
  //handle click
})
console.log(element1)

element3.addEventListener('click', () => {
  console.log('Cliquei no azul');
  //handle click
})
console.log(element1)

element4.addEventListener('click', () => {
  console.log('Cliquei no verde');
  //handle click
})
console.log(element1)

function chooseColor() {
  let selection = document.getElementsByClassName("selected");
  let CSSprop = window.getComputedStyle(selection, null).getPropertyValue("background-color");
  return CSSprop;
}
console.log(chooseColor());

let pixelChoose = document.querySelectorAll('.pixel')

document.addEventListener('click', () => {
  pixelChoose.target(chooseColor());
  //handle click
})