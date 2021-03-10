let tabela = [
'a',
'b',
'c',
'd'
];

let color = document.querySelector('.color');

for (let index = 0; index < tabela.length; index += 1 ) {
    let celulas = tabela[index];

    let tabelItem = document.createElement('td');
    tabelItem.innerText = celulas;
    tabelItem.className = 'cor'

    color.appendChild(tabelItem);
}

black = () => {
    document.querySelectorAll('.cor')[0].style.backgroundColor = 'black' ;
}
red = () => {
    document.querySelectorAll('.cor')[1].style.backgroundColor = 'red' ;
}
blue = () => {
    document.querySelectorAll('.cor')[2].style.backgroundColor = 'blue' ;
}
green = () => {
    document.querySelectorAll('.cor')[3].style.backgroundColor = 'green' ;
}
pintar = () => {
    black();
    blue();
    green();
    red();
}
pintar();