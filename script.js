function drawGrid() {
        
        const gridInputRow = document.getElementById("numberBoxFirst").value;
        const gridInputColumn = gridInputRow;
        
        for (let i = 0; i < gridInputRow; i++){
            const gridRow = document.createElement("div");
            gridRow.classList.toggle("gridRow");
            gridRow.setAttribute("id", "row"+i);
            grid.appendChild(gridRow); 
                for (let j = 0; j < gridInputColumn; j++) {
                    const gridColumn = document.createElement("div");
                    gridColumn.classList.toggle("gridColumn");
                    gridColumn.setAttribute("id","column"+j);
                    gridRow.appendChild(gridColumn); }        
            }
}

function submitForm(event) {
        event.preventDefault();
        const submit = document.getElementById("submitBtn");
        const numberBoxFirst = document.getElementById("numberBoxFirst");
        const numberBoxSecond = document.getElementById("numberBoxSecond");
        submit.disabled = true;
        numberBoxFirst.disabled = true;
        drawGrid();
        
}

function color(event) {
    const gridColumn = document.getElementsByClassName("gridColumn");
    for (const element of gridColumn) {
    element.addEventListener('click', () => {
            element.classList.add("color");
            clickAndDrag();
        })
    }
}

function rmColor(event) {
        const gridColumn = document.getElementsByClassName("gridColumn");
        for (const element of gridColumn) {
        element.addEventListener('dblclick', () => {
            element.classList.add('noColor');
            element.classList.remove("color")
            })
        }
}

window. onload = function() { document. getElementById("numberBoxFirst"). focus(); }

const form = document.getElementById("form");
form.addEventListener('submit', submitForm);
form.addEventListener('reset', () => { window.parent.location = window.parent.location.href; });

const grid = document.getElementById("grid");
//let gridClicked = true;
grid.addEventListener('mouseenter', function (event) {
    color();
    rmColor();
    });




