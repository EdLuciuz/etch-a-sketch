const main = document.querySelector('#main')

let gridRes = 99;
let gridHeight = 90/gridRes

function createGrids(res) {
    const gridCon = document.createElement('div')
    gridCon.classList.add('gridCon')
    main.appendChild(gridCon)

    for (i = 0; i < res * res; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox')
        gridBox.style.width = `${gridHeight}vh`
        gridBox.style.height = `${gridHeight}vh`
        gridCon.appendChild(gridBox)
    }
}


createGrids(gridRes);