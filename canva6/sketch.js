let colors;
let grid = [];
let cellSize = 3;

function setup() {
  createCanvas(500, 500);
  frameRate(15); // Vitesse des transitions
  noStroke(); // Supprime les contours
  colors = [color(2, 3, 3), color(255, 30, 100)]; // Orange et bleu
  
    for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y] = random(colors);
    }
  }
}

function draw() {
  background(255);
  
  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {
      let currentColor = grid[x][y];
      let newColor = random(colors);
      grid[x][y] = lerpColor(currentColor, newColor, 0.6); // Transition
      fill(grid[x][y]);
      ellipse(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2, cellSize, cellSize);
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}