const container = document.querySelector(".canvasdiv");
const color = "black";

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = color;
        });
    }
}
