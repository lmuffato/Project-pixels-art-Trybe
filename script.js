// Scripts start
window.onload = function () {
    /* --------- Colors Container --------- */
    const colors = document.querySelectorAll('.color');

    function clickToSelectColor(e) {
        let target = e.target;
        //let selectedColor = window.getComputedStyle(target).getPropertyValue('background-color');
        let selectedItem = document.querySelector('.selected');
        
        selectedItem.classList.remove('selected');
        target.classList.add('selected');
    }

    for (let color of colors) {
        color.addEventListener('click', clickToSelectColor);
    }
};
