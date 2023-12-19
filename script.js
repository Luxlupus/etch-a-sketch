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

function colorGrid(event) {
    const gridColumn = document.getElementsByClassName("gridColumn");
    for (const element of gridColumn) {
    element.addEventListener('mouseover', () => {
            element.classList.add("color");
        })
    }
}

function chooseColor(event) {
        const colorPicker = document.getElementById("colorPicker");
        const pickedColor = colorPicker.value;
        //finding desired element in style.css
        const stylesheet = document.styleSheets[0];
        const boxParaRule = [...stylesheet.cssRules].find(
        (r) => r.selectorText === ".color",
        );
        boxParaRule.style.setProperty("background-color", pickedColor);
        colorPicker.disabled = true;
        console.log(pickedColor);
}

window. onload = function() { document. getElementById("numberBoxFirst"). focus(); }

const form = document.getElementById("form");
form.addEventListener('submit', submitForm);
form.addEventListener('reset', () => { window.parent.location = window.parent.location.href; });

const colorForm = document.getElementById("colorForm");
colorForm.addEventListener('input', chooseColor);

const grid = document.getElementById("grid");
grid.addEventListener('mousedown', () =>  {colorGrid()});


