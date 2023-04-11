const mouseHover = document.getElementById("mouseHover");
const sizeButton = document.querySelector("#size");

function createGrid(size) {
  const squaresContainer = document.querySelector('.squares');
  squaresContainer.innerHTML = '';
  if (isNaN(size) || size < 1 || size > 100) {
    size = 16;
  }
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'grid');
    square.addEventListener('mouseover', function(event) {
      event.target.style.backgroundColor = "black";
    });
    squaresContainer.appendChild(square);
  }
  squaresContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  squaresContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

sizeButton.addEventListener("click", function() {
  const size = prompt("Please enter grid size (1-100)");
  createGrid(size);
});

createGrid();