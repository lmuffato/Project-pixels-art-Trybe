document.getElementById('black').style.backgroundColor = 'black';
document.querySelector('#blue').style.backgroundColor = 'blue';
document.querySelector('#green').style.backgroundColor = 'green';
document.querySelector('#red').style.backgroundColor = 'red';

sessionStorage.setItem('backgroundColor', 'black');

function setBackgroundColor(element) {
  return sessionStorage.setItem('backgroundColor', element.style.backgroundColor);
}

function changeSetColor() {
  document.querySelectorAll('.colors').forEach(item => {
    item.addEventListener('click', setBackgroundColor(item));
  });
}

function changePixelColor() {
  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', item.style.backgroundColor === sessionStorage.getItem('backgroundColor'));
  });
}

/* function chosingPixelColor() {
  let backgroundColor = "black";
  let pixelColor = document.getElementsByTagName('.color');
  pixelColor.addEventListener('click', backgroundColor = event.target.style.backgroundColor);
  return backgroundColor;
}

function changePixelColor() {
  let pixelChosed = document.getElementsByClassName('.pixel');
  pixelChosed.addEventListener('click');
  event.target(event.tager.style.backgroundColor === chosingPixelColor());
} */
