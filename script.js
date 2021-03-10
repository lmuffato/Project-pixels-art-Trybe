// Scripts start
window.onload = function () {
    /* --------- Colors Container --------- */
    const colors = document.querySelectorAll('.color');

    function clickToSelectColor(e) {
        // let selectedColor = window.getComputedStyle(target).getPropertyValue('background-color');
        let selectedItem = document.querySelector('.selected');
        
        selectedItem.classList.remove('selected');
        e.target.classList.add('selected');''
    }

    for (let color = 0; color < colors.length; color += 1) {
        colors[color].addEventListener('click', clickToSelectColor);
    }
};
