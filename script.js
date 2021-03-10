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

function squareClean (){
    let getClearButton = document.querySelector('#clear-board');
    getClearButton.addEventListener('click', function() {
        let getSquare = document.querySelectorAll('#pixel-board>div');
        for (let index = 0; index < getSquare; index += 1) {
            getSquare[index].style.backgroundColor='white'
        }
    })
}
squareClean ();

function changeColors (){
    let palletset = document.querySelector('#color-palette')
    palletset.addEventListener('click', function(change){
        if (change.target.className == 'color'){
        document.querySelector('.selected').className = 'color';
        change.target.className += ' selected';
    }
  })
}
changeColors ();

