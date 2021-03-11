
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

let color = document.getElementsByClassName('color');


color = addEventListener('click',select);

function select(event){
let colorr = document.getElementsByClassName('selected');
colorr[0].classList.remove('selected')
let alvo= event.target;
alvo.classList.add('selected');
}

