function makeTable(numeroMatriz) {
  const getSquare = document.getElementById('pixel-board');
  let makeRow = document.createElement('tr');
  let makeSquare = document.createElement('td');
  const tdClass = 'pixel';
  for (let index = 0; index < numeroMatriz; index += 1) {
    makeRow = document.createElement('tr');
    getSquare.appendChild(makeRow);
    for (let indexSquare = 0; indexSquare < numeroMatriz; indexSquare += 1) {
      makeSquare = document.createElement('td');
      getSquare.appendChild(makeSquare);
      makeSquare.className = tdClass;
    }
  }
}

function changeSelectedClass(){
  let getColor = document.getElementsByClassName('selected')[0]
  let blackClick = document.getElementsByClassName('color')[0]
  let purpleClick = document.getElementsByClassName('color')[1]
  let greyClick = document.getElementsByClassName('color')[2]
  let silverClick = document.getElementsByClassName('color')[3]

  blackClick.addEventListener('click', function () {
    getColor = document.getElementsByClassName('selected')[0]
    getColor.classList.remove('selected')
    blackClick.classList.add('selected')
  })

  purpleClick.addEventListener('click', function () {
    getColor = document.getElementsByClassName('selected')[0]
    getColor.classList.remove('selected')
    purpleClick.classList.add('selected')
  })

  greyClick.addEventListener('click', function () {
    getColor = document.getElementsByClassName('selected')[0]
    getColor.classList.remove('selected')
    greyClick.classList.add('selected')
  })

  silverClick.addEventListener('click', function () {
    getColor = document.getElementsByClassName('selected')[0]
    getColor.classList.remove('selected')
    silverClick.classList.add('selected')
  })
}



makeTable(5);
changeSelectedClass()
