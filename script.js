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


