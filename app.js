const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const sideLength = '25px'
    const squareDiv = document.createElement('div');
    squareDiv.style.width = sideLength;
    squareDiv.style.height = sideLength;
    squareDiv.style.backgroundColor = 'yellow';
    container.appendChild(squareDiv);
}