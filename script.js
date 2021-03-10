function colorsPalette () {
    let squareBlack = document.getElementById('black');
    squareBlack.style.backgroundColor = 'black';

    let squareBlue = document.getElementById('blue');
    squareBlue.style.backgroundColor = 'blue';

    let squareRed = document.getElementById('red');
    squareRed.style.backgroundColor = 'red';

    let squareYellow = document.getElementById('yellow');
    squareYellow.style.backgroundColor = 'yellow';
}

window.onload = function () {
    colorsPalette ();
};