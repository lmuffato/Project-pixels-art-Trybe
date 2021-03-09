const colorBlocks = document.querySelector('#pixel-board');
const  n = 5
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    let block = document.createElement('div');
    colorBlocks.appendChild(block);
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
        const Vblocks = document.createElement('div');
        block.appendChild(Vblocks);
        Vblocks.classList = 'pixel';
    }
}