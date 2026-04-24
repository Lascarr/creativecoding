function setup() {
  createCanvas(500, 500);
  frameRate(20);
  noFill(); 
  strokeWeight(1); 
}

function draw() {
  background(1);
  
  let cellSize = random(10, 50); // Taille aléatoire pour casser la régularité
  
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      stroke(random(255), random(200), random(200)); // Couleur aléatoire pour plus de variation
      let angle = random(TWO_PI); // Angle totalement libre
      let len = random(cellSize * 0.5, cellSize * 2); // Longueur variable
      
      line(x, y, x + cos(angle) * len, y + sin(angle) * len); // Ligne dans une direction totalement aléatoire
    }
  }
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}