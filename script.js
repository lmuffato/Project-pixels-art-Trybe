//Seleciona o título e marca ele como verde (opcional, feito só pra teste)
document.getElementsByTagName("h1")[0].style.color = 'rgb(62, 196, 0)';
//Seleciona o elemento pelo querySelector, retornando um arrey com as divs
/*seleciona o index da div e define a cor de funto
 (é melhor indicar a cor de fundo pelo JS do que pelo css)*/
document.querySelectorAll('.color')[0].style.backgroundColor = 'rgb(219, 66, 66)';
document.querySelectorAll('.color')[1].style.backgroundColor = 'rgb(250, 175, 114)';
document.querySelectorAll('.color')[2].style.backgroundColor = 'rgb(130, 250, 114)';
document.querySelectorAll('.color')[3].style.backgroundColor = 'rgb(49, 160, 194)';
document.querySelectorAll('.color')[4].style.backgroundColor = 'rgb(103, 85, 185)';


//Seleciona todos os elementos da classe .pixel
// .forEach(item => {}) Aplica o método a todos os itens do array
document.querySelectorAll('.pixel').forEach(item => {
// Muda a cor de fundo do item do array 
item.style.backgroundColor = 'rgb(196, 189, 189)';})



// cria a variável da cor selecionada. A variável é criada fora 
let selectedColor = 'rgb(196, 189, 189)'
//forEach coloca o método em todas as variáveis do array atribuindo o array[index] no item
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', clickParaSelecionar);
  function clickParaSelecionar(eventoDeOrigem){
    selectedColor = item.style.backgroundColor;
    //Teste de verificação
    console.log(selectedColor);
    }
}
)

//forEach coloca o método em todas as variáveis do array atribuindo o array[index] no item
document.querySelectorAll('.pixel').forEach(item => {
  item.addEventListener('click', recebeClick);
  function recebeClick(eventoDeOrigem){
    item.style.backgroundColor = selectedColor;
    //Teste de verificação
    console.log(selectedColor);
    }
}
)

//Teste: Verifica se a cor está sendo impressa corretametne
//console.log(document.querySelectorAll('.color')[4].style.backgroundColor)


/*
//forEach coloca o método em todas as variáveis do array
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', recebeClick)
  let col = item.style.backgroundColor
  function recebeClick(eventoDeOrigem){
    console.log(col);
      //console.log(eventoDeOrigem.target);
      //console.log(eventoDeOrigem.type);
    }
}
)
*/

/*
document.querySelectorAll('.color').forEach(corSelecionada => {
  corSelecionada.addEventListener('click', recebeClick)
    function recebeClick(eventoDeOrigem) {
      this.console.log(thi.target);
      console.log(eventoDeOrigem.type);
      console.log(eventoDeOrigem);}
}
)
*/

/*
var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});
//forEach repte o argumetno para todos os itens do array
document.querySelectorAll('.color').forEach(function(entry)
{console.log(entry);});

*/
  /*
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', recebeClick)
    function recebeClick(eventoDeOrigem) {
      console.log(eventoDeOrigem.target);
      console.log(eventoDeOrigem.type);}
}
)
*/


//let theParent = document.querySelector('#color-palette').children;



//et clicou = document.querySelectorAll('.color')
//let ciclou = document.getElementsByClassName('color')
/*
document.querySelectorAll('.color').forEach(item => {
  item.addEventListener('click', recebeClick)
    function recebeClick(eventoDeOrigem) {
      console.log(eventoDeOrigem.target);
      console.log(eventoDeOrigem.type);}
}
)
*/

/*
//let clicou = document.querySelectorAll('.color');
document.querySelectorAll('.color').addEventListener('click', recebeClick);
function recebeClick(eventoDeOrigem) {
    console.log(eventoDeOrigem.target);
    console.log(eventoDeOrigem.type);
}*/

//Seleciona a paleta 1
let color1 = document.querySelectorAll('.color')[0];
let color2 = document.querySelectorAll('.color')[1];
//Atribui cor a paleta 1
//color1.style.backgroundColor = '#333';
//Iguala as propreiades de cores
//color2.style.backgroundColor = color1.style.backgroundColor

document.querySelectorAll('.color')[1] = 
//Cria um arrey contendo a paleta de cores
pallet = document.querySelectorAll('.color');
//Defina a cor pro elemetno do array