const paletteColor = document.querySelector('#color-palette');

function addColorQuadOne() {
  return  paletteColor.children[0].style.backgroundColor = 'black'
}

function addColorQuadTwo() {
	return  paletteColor.children[1].style.backgroundColor = 'blue'
}

function addColorQuadTree() {
	return  paletteColor.children[2].style.backgroundColor = 'brown'
}

function addColorQuadFor() {
	return paletteColor.children[3].style.backgroundColor = 'aqua'
}


addColorQuadOne()
addColorQuadTwo()
addColorQuadTree()
addColorQuadFor()