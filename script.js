//TESTE: Seleciona o título e marca ele como verde apenas de teste
document.getElementsByTagName("h1")[0].style.color = 'rgb(62, 196, 0)';

/*Seleciona o elemento pelo querySelector, retornando um arrey com as divs
contendo a classe color. Escolhendo as dives pelo numerdo do [index] e definindo a cor
IMPORTANTE! É melhor indicar a cor de fundo pelo JavaScript do que pelo CSS,)*/
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
document.querySelectorAll('.color')[1].style.backgroundColor = 'rgb(219, 66, 66)';
document.querySelectorAll('.color')[2].style.backgroundColor = 'rgb(250, 175, 114)';
document.querySelectorAll('.color')[3].style.backgroundColor = 'rgb(130, 250, 114)';
document.querySelectorAll('.color')[4].style.backgroundColor = 'rgb(49, 160, 194)';


//Seleciona todos os elementos da classe pixel
// .forEach(item => {}) Aplica o método individualmente a todos os itens do array
document.querySelectorAll('.pixel').forEach(item => {
// Muda a cor de fundo do item do array 
//item.style.backgroundColor = 'rgb(196, 189, 189)';
item.style.backgroundColor = 'white';

})


/* cria a variável da cor selecionada.
IMPORTANTE! A variável é criada fora da função, para ser usada fora da função*/
// Cria a variável da cor selecionada e atribui a ela a cor da primeira paleta (cor preta)
let selectedColor = document.querySelectorAll('.color')[0].style.backgroundColor;

/* INFORMAÇÃO: forEach pega todos os elementos individuais de um array e aplica o método individualmente
 a todos eles. O termo 'paletaSelecionada' corresponde ao elemento individual do array, como o 'array[index]'.
O '=>' siginifca que esse método será aplicado individualmente nas funções que vierem depois do '=>' */

//Função para selecionar as cores da paleta
document.querySelectorAll('.color').forEach(paletaSelecionada => {
  paletaSelecionada.addEventListener('click', clickParaSelecionar);
  function clickParaSelecionar(eventoDeOrigem){
    selectedColor = paletaSelecionada.style.backgroundColor;
    //TESTE: Apenas para verificar no console se a cor está realmente sendo selecionada
    console.log(selectedColor);
  }
}
)

//Função para colorir o quadro de pixels com a cor selecionada
document.querySelectorAll('.pixel').forEach(pixelSelecionado => {
  pixelSelecionado.addEventListener('click', recebeClick);
  function recebeClick(eventoDeOrigem){
    pixelSelecionado.style.backgroundColor = selectedColor;
    //Teste de verificação
    console.log(selectedColor);
  }
}
)
