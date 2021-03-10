// Scripts start
window.onload = function () {
    /* --------- Colors Container --------- */
    let colors = document.querySelectorAll('.color');
    for (let color of colors) {
        color.addEventListener('click', clickToSelectColor);
    }

    function clickToSelectColor(e) {
        let target = e.target;
        let selectedColor = window.getComputedStyle(target).getPropertyValue("background-color");
        let selectedItem = document.querySelector('.selected');
        
        selectedItem.classList.remove('selected');
        target.classList.add('selected');
    }
}
