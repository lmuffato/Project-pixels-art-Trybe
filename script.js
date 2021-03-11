
/*   const alvo = document.getElementById('color1');
  
  function capturar(){
      alvo.style.backgroundColor= 'red';
      
      console.log('testesssssss');
  }
  
 alvo.addEventListener('click', capturar);
       */



/* const mudaCor= document.querySelector('.selected');
function mudarACOr(e){
    mudaCor.className = 'color';

}

//mudaCor.addeventListener('click', mudaCor);
mudaCor.addEventListener('click',mudarACOr);
 */

// fiz com olhada em codigo de outros alunos que postaram no slack
let color = document.getElementsByClassName('color'); 
color = addEventListener('click', select);

function select(event) {
  let colorr = document.getElementsByClassName('selected');
  colorr[0].classList.remove('selected')
  let alvo = event.target;
  alvo.classList.add('selected');
}

function pintar(e){
  e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;  
  
}  


let colorir = document.querySelector('#pixel-board');
colorir.addEventListener('click', pintar);

