const container = document.querySelector("#container");
const button = document.querySelector("#new-grid-button");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", function () {
  let size = prompt("Enter number of squares per side. Maximum is 100:");

  size = Number(size);

  if (size > 100) {
    size = 100;
  }

  if (size < 1 || isNaN(size)) {
    return;
  }

  createGrid(size);
});

createGrid(16);