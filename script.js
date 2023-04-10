const mouseHover = document.getElementById("mouseHover");
const sizeButton = document.querySelector("#size");

const createGrid = (n) => {
  const squaresContainer = document.querySelector('.squares');
  for (let i = 0; i < n * n; i++) {
    squaresContainer.appendChild(
      Object.assign(
        document.createElement('div'),
        mouseHover.appendChild(squaresContainer)))
        squaresContainer.addEventListener('mouseover', function(event) {
          event.target.style.backgroundColor = "black"
        }
      )
  }
}


function gridSize() {
  const size = prompt("Please enter grid size");
  createGrid(size)
}

sizeButton.addEventListener("click", gridSize);

// n = 16

createGrid(16);