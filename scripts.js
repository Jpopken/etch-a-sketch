document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container'); // Select the container by class

    const gridSize = 16; // Change this to the desired grid size

    // Create the grid squares and add them to the container
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }

    // Add some styling to the grid squares (you can customize this in CSS)
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.style.width = "35px"
        square.style.height = '35px'
        square.style.paddingBottom = '1px';
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid #ccc';
        
    });

    // Add event listener to change color on hover (you can customize this behavior)
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
});