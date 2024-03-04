const divContainer = document.querySelector('#divContainer')

let numberDivs = 16;
let width = 80/numberDivs;
let height = 80/numberDivs;



function updateContainer(numberDivs) {
    if (divContainer.children.length > 0) {
        let boxes = document.querySelector('.item')
        
        divContainer.remove(boxes)
    }

    for (i = 0; i < numberDivs * numberDivs; i++) {
        const boxes = document.createElement('div')
        boxes.classList.add('item')
        boxes.classList.add('item2')
        boxes.style.width = `${height}vh`
        boxes.style.height = `${height}vh`

        divContainer.appendChild(boxes)
    }
}

//function effectHover() {}

//boxes.addEventListener('mouseover', effectHover)

updateContainer(numberDivs);

