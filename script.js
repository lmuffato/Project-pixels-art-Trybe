let getSquare = document.getElementById('pixel-board');
let makeRow = document.createElement('tr');
let makeSquare = document.createElement('td');
let tdClass = 'pixel'

for (let index = 0; index < 5; index += 1) {
    makeSquare = document.createElement('td')
    makeRow = document.createElement('tr')
    getSquare.appendChild(makeRow)
    for (let indexSquare = 0; indexSquare <= 5; indexSquare += 1) {
      getSquare.appendChild(makeSquare)
      makeSquare = document.createElement('td')
      makeSquare.className = tdClass
  }
}

