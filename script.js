// Global variables for initial canvas

const canvas = document.querySelector(".canvasdiv");
let color = "black";
let size = 16;

const resizeButton = document.querySelector(".size");

// Giving user option to resize canvas

resizeButton.addEventListener("click", function(){
    const sizeInput = document.getElementById("numberInput");
    const canvasSize = sizeInput.value;
    size = canvasSize;

    canvas.innerHTML = " ";
    createCanvas(size);
})

// Letting the user to choose color

const colorOptions = document.getElementById("colorPicker");

colorOptions.addEventListener("change", function(){
    const selectedColor = colorOptions.value;
    color = selectedColor;
})

// Creating erase function, that is passed in html

const eraserButton = document.querySelector(".eraser");

function erase() {
    color = "white";
};

// Clearing the whole canvas

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function(){
    canvas.innerHTML = " ";
    createCanvas(size);
});

/* Calling createCanvas function, in order to
create the first, inital canvas */

createCanvas(size);


function createCanvas(num) {
    canvas.style.gridTemplateColumns = `repeat(${num}, 20px)`;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            canvas.appendChild(square);
    
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = color;
            });
        }
    }
}