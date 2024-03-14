const colorDisplay = document.getElementById('color-display');
const generateColorBtn = document.getElementById('generate-color');
const colorCode = document.getElementById('color-code');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColor() {
  const randomColor = getRandomColor();
  colorDisplay.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
}

generateColorBtn.addEventListener('click', generateColor);