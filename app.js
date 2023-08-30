const container = document.querySelector('#container');

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', createGrid);

function createGrid() {

    // removes all the child elements from container each time createGrid() is ran. Clears the grid for change in Prompt
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let gridSize = prompt("Enter a number between 2 and 50");
    let gridSizeInt = parseInt(gridSize);

    if (gridSizeInt < 2 || gridSizeInt > 50) {
        alert("Invalid Input. Please try again!");
        createGrid();
    }
    else {

        // calculates the size of each square (div) in order to fit within the fixed 400X400 container. Subtract 2 to take into account 1x1 border on squares (divs)
        let squareSize = (400 / gridSizeInt) - 2
        let squareSizeParse = parseFloat(squareSize)
        
        // calculates the amount of divs and is used in the for loop to create x amount of squares
        let gridSizeIntx = gridSizeInt * gridSizeInt;

        for (let i = 0; i < gridSizeIntx; i++) {
            
            const squareDiv = document.createElement('div');
            
            squareDiv.style.width = squareSizeParse + 'px';
            squareDiv.style.height = squareSizeParse + 'px';
            squareDiv.style.borderStyle = 'solid'
            squareDiv.style.borderColor = 'black'
            squareDiv.style.borderWidth = '1px'
        
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'blue';
            });
            squareDiv.addEventListener('mouseout', () => {
                squareDiv.style.backgroundColor = 'blue';
            });
        
            container.appendChild(squareDiv);
        }
}

}


// code to randomly change the background color

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

function changebackgroundColor() {
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();

    const rgbColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = rgbColor;
}

setInterval(changebackgroundColor, 2000);



