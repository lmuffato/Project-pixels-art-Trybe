//color[length] para alterar a cor nas paletas

window.onload = function bemVindo() {
    console.log("oi")
}

let palleteColorBasic = ['black', 'red', 'blue', 'green'];

window.onload = function palleteColor(){
    for (let index = 0; index < palleteColorBasic.length; index += 1)
        document.querySelectorAll('.color')[index].style.backgroundColor = palleteColorBasic[index];
}

// addEventListener('click',)


