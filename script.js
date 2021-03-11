/*let tabela = [
'a',
'b',
'c',
'd'
];*/

//let color = ;

for (let index = 0; index < 4; index += 1 ) {
    //let celulas = tabela[index];

    let tabelItem = document.createElement('td');
    //tabelItem.innerText = celulas;
    tabelItem.className = 'color'

    document.querySelector('.cool').appendChild(tabelItem);
}

black = () => {
    document.querySelectorAll('.color')[0].style.backgroundColor = 'rgb(0, 0, 0)' ;
}
red = () => {
    document.querySelectorAll('.color')[1].style.backgroundColor = 'red' ;
}
blue = () => {
    document.querySelectorAll('.color')[2].style.backgroundColor = 'blue' ;
}
green = () => {
    document.querySelectorAll('.color')[3].style.backgroundColor = 'green' ;
}
pintar = () => {
    black();
    blue();
    green();
    red();
}
pintar();