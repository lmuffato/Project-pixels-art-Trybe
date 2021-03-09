function criaPaleta(numberOfFrames) {
  for (let index = 0; index < numberOfFrames; index +=1) {
    let pegaPaleta = document.getElementById("color-palette");
    let criaPaleta = document.createElement("div")
    criaPaleta.className = 'color';
    pegaPaleta.appendChild(criaPaleta);
  }
}
criaPaleta(4);

function colorePaletaSuperior() {
  document.getElementsByClassName('color')[0].style.backgroundColor = "black";
  document.getElementsByClassName('color')[1].style.backgroundColor = "orange";
  document.getElementsByClassName('color')[2].style.backgroundColor = "olive";
  document.getElementsByClassName('color')[3].style.backgroundColor = "blue";
}
colorePaletaSuperior();

function criaQuadro(numberOfFrames) {
  for (let index = 0; index < numberOfFrames * numberOfFrames; index += 1) {
    let criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    let pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
  }
}
criaQuadro(5);

document.getElementsByClassName('color')[0]