function selectColor() {
    const colors = document.querySelectorAll('.color');
    for(let index1 = 0; index1 < colors.length; index += 1) {
        colors[index1].addEventListener('click', (e) => {
            for(let index2 = 0; index2 < colors.length; index2 += 1) {
                colors[index2].classList.remove('selected');
            }
            e.target.classList.add('selected');
        });
    }
}

selectColor();