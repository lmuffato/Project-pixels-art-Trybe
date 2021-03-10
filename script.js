// referência: Jodiel-Briesemeister. (https://github.com/tryber/sd-010-a-project-pixels-art/pull/119/files);
function palette() {
    const color = document.querySelectorAll('.color');
    const arrayColors = ['black', 'blue', 'yellow', 'green'];
    for (let index = 0; index < color.length; index += 1) {
      color[index].style.backgroundColor = arrayColors[index]; //cada uma das paletas fica com a cor correspondente ao array.
      if (arrayColors[index] === 'black') { //seleciona a cor inicial preta.
        color[index].className += ' selected';
      }
    }
  }
  
  function getColor() {
    const colorArray = document.querySelector('#color-palette');
    colorArray.addEventListener('click', (event) => { // adiciona listener do evento click nas paletas
      const selectedColor = event.target; // guarda a cor da paleta em que clicou
      document.querySelector('.selected').className = 'color';
      selectedColor.className += ' selected'; //adiciona a classe selected à cor da paleta que clicou.
    });
  }
  
  getColor();