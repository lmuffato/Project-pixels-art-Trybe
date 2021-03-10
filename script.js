function createPixBox () {
    const getPixelBoard = document.querySelector('#pixel-board');

    for (let index = 1; index < 25; index += 1) {
        const pixelItem = document.createElement('div');
        pixelItem.className = 'pixel';
        getPixelBoard.appendChild(pixelItem);
    }
}

createPixBox();
