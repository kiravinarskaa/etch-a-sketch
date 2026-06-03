// Select the grid container from the HTML page
const container = document.querySelector("#container");
// Select the button used to create a new grid
const button = document.querySelector("#new-grid-button");
// Function that creates a grid of squares
function createGrid(size) {
   // Remove any existing squares before creating a new grid
  container.innerHTML = "";
// Calculate the size of each square so the grid fits inside 960px
  const squareSize = 960 / size;
// Create the required number of squares
  for (let i = 0; i < size * size; i++) {
     // Create a new div element for a square
    const square = document.createElement("div");
   // Add the CSS class "square" to the element
    square.classList.add("square");
  // Set the width and height of the square
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
 // Change the square color when the mouse moves over it
    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = "black";
    });
 // Add the square to the grid container
    container.appendChild(square);
  }
}
// Event listener for the "New Grid" button
button.addEventListener("click", function () {
    // Ask the user for the number of squares per side
  let size = prompt("Enter number of squares per side. Maximum is 100:");

  // Convert the input from text to a number
  size = Number(size);
// Limit the maximum grid size to 100
  if (size > 100) {
    size = 100;
  }
 // Stop if the input is invalid or less than 1
  if (size < 1 || isNaN(size)) {
    return;
  }
  // Create a new grid with the chosen size
  createGrid(size);
});
// Create the default 16 × 16 grid when the page loads
createGrid(16);
