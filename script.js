//requisito 7//
function setClass(cor) {
    
    let meuId = document.getElementById(cor);
    let minhaClass = document.getElementsByClassName('selected')[0];

    meuId.addEventListener('click', function(event) {
        minhaClass = document.getElementsByClassName('selected')[0]; 
      if (meuId.className == 'color' ){

        minhaClass.classList.remove('selected');       
        meuId.className = 'color selected';

      }
    });
  };
  
  let preto = document.getElementById('black')
  preto.addEventListener("click", setClass('black'));

  let amarelo = document.getElementById('yellow')
  amarelo.addEventListener("click", setClass('yellow'));

  let azul = document.getElementById('blue')
  azul.addEventListener("click", setClass('blue'));

  let verde = document.getElementById('green')
  verde.addEventListener("click", setClass('green'));

