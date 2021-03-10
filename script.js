function palete () {
    let allColors = document.querySelectorAll('#color-palette>div');
    let colors = ['black', 'orange', 'blue', 'green'];
        for (index in allColors){
            for (index_2 in colors) {
                if (index == index_2){
                    allColors[index].style.backgroundColor = colors[index_2]
                }
            }
        }

    }
    palete()

function makeSquare (pixelSquare) {
    for (let index = 0; index < pixelSquare * pixelSquare; index +=1){
        let makePixel = document.createElement('div');
        makePixel.className = 'pixel';
        let pixelBoard = document.getElementById('pixel-board')
        pixelBoard.appendChild(makePixel);
    }
}
makeSquare(5);

window.onload = function(){
    let allBlack = document.getElementById('color-palette')
    let firstChild = allBlack.childNodes[1]
        firstChild.className += ' selected'
}

// assistência de Bruno Bastos, referência: https://forum.freecodecamp.org/t/addeventlistener-and-changing-background-color/193023
function changeSelectColors (){
    let palletset = document.querySelector('#color-palette')
    palletset.addEventListener('click', function(change){
        if (change.target.className == 'color'){
        document.querySelector('.selected').className = 'color';
        change.target.className += ' selected';
    }
  })
}
changeSelectColors ();

//referência https://pt.stackoverflow.com/questions/426718/qual-a-diferen%C3%A7a-entre-queryselector-e-o-queryselectorall#:~:text=Primeiramente%20querySelector%20e%20querySelectorAll%20s%C3%A3o,de%20elementos%20presentes%20no%20documento.
// Também vi algumas resoluções dos colegas, em especial a do 311stan, link https://github.com/tryber/sd-010-a-project-pixels-art/pull/106
function ColorForaChange(){
    let setpallet = document.querySelector('#pixel-board')
    setpallet.addEventListener('click', function(colorChanges){
        let letsChange = document.querySelector('.selected').style.backgroundColor;
        let pixelChange = document.querySelectorAll('.pixel');
        for (ind in pixelChange){
            if (pixelChange[ind] == colorChanges.target){
                pixelChange[ind].style.backgroundColor = letsChange
            }
        }
    })
}
ColorForaChange();


let getClearButton = document.getElementById('clear-board');

function squareClean (){
    let getPixels = document.querySelectorAll('.pixel')
    for (inde in getPixels){
        let cleanPixels = getPixels[inde]
        cleanPixels.style.backgroundColor = 'white'
    }
}
getClearButton.addEventListener('click', squareClean)

//perguntar o problema desta função
/*function squareClean (){
    let getClearButton = document.querySelector('#clear-board');
    getClearButton.addEventListener('click', function() {
        let getSquare = document.querySelectorAll('#pixel-board>div');
        for (let index = 0; index < getSquare; index += 1) {
            getSquare[index].style.backgroundColor='white'
        }
    })
}
squareClean ();
*/