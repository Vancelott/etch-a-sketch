const createGrid = (n) => {
  const squaresContainer = document.querySelector('.squares');
  for (let i = 0; i < 32; i++) {
    squaresContainer.appendChild(
      Object.assign(
        document.createElement('div'), {
        }
      )
    );
  }
}

createGrid();