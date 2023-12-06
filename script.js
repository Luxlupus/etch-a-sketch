let gridSize = 0;

//ask user for the desired size of grid with upper limit of 64
function getGridSize() {
    gridSize = prompt("Enter sketch grid size: ?");
    if (gridSize > 64)
        getGridSize();
    return gridSize; }

//draw the sketch grid
function drawGrid(gridSize) {
    const grid = document.querySelector("#grid");
    grid.addEventListener('click',() => {
        for (let i = 0; i < gridSize; i++){
            const gridRow = document.createElement("div");
            gridRow.classList.toggle("gridRow");
            grid.appendChild(gridRow); 
    
                for (let j = 0; j < gridSize; j++) {
                    const gridColumn = document.createElement("div");
                    gridColumn.classList.toggle("gridColumn");
                    gridRow.appendChild(gridColumn); } 
        } })
}

getGridSize();
drawGrid(gridSize);