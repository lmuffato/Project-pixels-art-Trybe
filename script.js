function creatingTitle () {
  const tit = document.querySelector('#title');
  tit.innerHTML = 'Paleta de Cores';
}
creatingTitle();

function creatingPalleteColors (qtd) {
  for (let i = 0; i < qtd; i += 1) {
    const sectionMain = document.querySelector('section');
    const createDiv = document.createElement('span');
    // cor aleatoria: https://qastack.com.br/programming/1484506/random-color-generator
    const color = '#' + Math.floor (Math.random () * 16777215) .toString (16);
      createDiv.style.backgroundColor = color;
      createDiv.className = 'color';
      sectionMain.appendChild(createDiv);
  }
}
creatingPalleteColors(4);

window.onload = function firstBlack () {
  const firstSpan = document.querySelector('span');
  firstSpan.style.backgroundColor = 'rgb(0,0,0)';
  firstSpan.className = 'selected';
}

function pixelBoard (vertical, horizontal) {
  const sectionMain = document.querySelector('#pixel-board');
  for (let i = 0; i < vertical; i += 1) {
    const createSection = document.createElement('section');
    for (let j = 0; j < horizontal; j += 1) {
      const createDiv = document.createElement('div');
      createDiv.className = 'pixel';
      createSection.appendChild(createDiv);
      sectionMain.appendChild(createSection);
    }
  }
}
pixelBoard(5, 5);


function gettingColorPixel () {
  const spanColor = document.querySelectorAll('span');
  for (let i = 0; i < spanColor.length; i += 1) {
    if (spanColor[i].className === 'color') {
      spanColor[i].addEventListener('click',function(event) {
        event.target.className = 'selected';
        for (let j = 0; j < spanColor.length; j += 1) {
          if (spanColor[j] !== spanColor[i]) {
            spanColor[j].className = 'color';
          }
        }
        })
    }
  }
}
gettingColorPixel();

function changeBGColor () {
  const sectionPixel = document.querySelectorAll('.pixel');
  const sectionSelected = document.querySelector('.selected');
  for (let i = 0; i < sectionPixel.length; i += 1) {
    if (sectionPixel[i].className === 'pixel') {
      sectionPixel[i].addEventListener('click',function(eventN) {
        eventN.target = sectionSelected;
      })
    }
  }

}
changeBGColor();