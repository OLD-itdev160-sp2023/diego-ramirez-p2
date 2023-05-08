const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#800080'];

const colorDisplay = document.getElementById('colorDisplay');
const colorButton = document.getElementById('colorButton');
const colorPalette = document.querySelectorAll('.color');

function setRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorDisplay.style.backgroundColor = randomColor;
}

function setColorFromPalette() {
  const color = this.style.backgroundColor;
  colorDisplay.style.backgroundColor = color;
}

colorButton.addEventListener('click', setRandomColor);

colorPalette.forEach(color => {
  color.addEventListener('click', setColorFromPalette);
});


