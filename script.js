const container = document.querySelector(".canvasdiv");
let color = "black";
let size = 16;

const resizeButton = document.querySelector(".size");

resizeButton.addEventListener("click", function(){
    const sizeInput = document.getElementById("numberInput");
    const canvasSize = sizeInput.value;
    size = canvasSize;

    const canvas = document.querySelector(".canvasdiv");
    canvas.innerHTML = " ";
    createCanvas(size);
})

const colorOptions = document.getElementById("colorPicker");

colorOptions.addEventListener("change", function(){
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    color = selectedColor;
})

const eraserButton = document.querySelector(".eraser");

eraserButton.addEventListener("click", function(){
    color = "white";
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function(){
    const canvas = document.querySelector(".canvasdiv");
    canvas.innerHTML = " ";
    createCanvas(size);
});


createCanvas(size);


function createCanvas(num) {
    const canvas = document.querySelector(".canvasdiv");
    canvas.style.gridTemplateColumns = `repeat(${num}, 20px)`;

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
    
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = color;
            });
        }
    }
}