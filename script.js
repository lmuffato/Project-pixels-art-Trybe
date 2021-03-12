function panelColors(colorList){
for (let index = 0; index < colorList.lenght; index += 1){
    colorList[index] = document.getQuerySelectorAll('.color');
    colorList[0].style.backgroundColor = 'blue';
    colorList[1].style.backgroundColor = 'yellow';
    colorList[2].style.backgroundColor = 'red';
    colorList[3].style.backgroundColor = 'green';
}
}
panelColors();