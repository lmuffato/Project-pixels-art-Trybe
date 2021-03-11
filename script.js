for (let index = 0; index < 4; index += 1 ) {
        let tabelItem = document.createElement('td');
        tabelItem.className = 'color';
        document.querySelector('.cool').appendChild(tabelItem);
    }

let black = () => {
    document.querySelectorAll('.color')[0].style.backgroundColor = 'rgb(0, 0, 0)' ;
}
let red = () => {
    document.querySelectorAll('.color')[1].style.backgroundColor = 'red' ;
}
let blue = () => {
    document.querySelectorAll('.color')[2].style.backgroundColor = 'blue' ;
}
let green = () => {
    document.querySelectorAll('.color')[3].style.backgroundColor = 'green' ;
}
let pintar = () => {
    black();
    blue();
    green();
    red();
}
pintar();