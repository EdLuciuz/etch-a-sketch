const main = document.querySelector('#main')
const changeButton = document.querySelector('#change')
const eraseButton = document.querySelector('#erase')

let gridRes = 16;
let gridHeight = 90/gridRes

changeButton.addEventListener('click', () => {
    let gridCon = document.querySelector('.gridCon')
    main.removeChild(gridCon)

    let gridRes = prompt('Enter the resolution size')

    if (gridRes > 100) {
        gridRes = 100;
    }

    let gridHeight = 90/gridRes

    createGrids(gridRes, gridHeight);
})

eraseButton.addEventListener('click', () => {
    let gridBox = document.querySelectorAll('.gridBox')

    gridBox.forEach(gridBox => {
        gridBox.classList.remove('ink')
    })
})

function createGrids(res, height) {
    const gridCon = document.createElement('div')
    gridCon.classList.add('gridCon')
    main.appendChild(gridCon)

    for (let i = 0; i < res * res; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox')
        gridBox.style.width = `${height}vh`
        gridBox.style.height = `${height}vh`

        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.add('ink')
        })
        gridCon.appendChild(gridBox)
    }
}

createGrids(gridRes, gridHeight);