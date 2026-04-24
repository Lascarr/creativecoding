function setup() {
      filter(POSTERIZE, 9);
  createCanvas(500, 500);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(255, 0, 200);
  let cols = 15;
  let rows = 60;
  let spacingX = width / cols;
  let spacingY = height / rows;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x1 = i * spacingX;
      let y1 = j * spacingY + 5;
      let x2 = x1 + spacingX;
      let y2 = y1 + sin(frameCount * 0.09 + i) * 1;
      
      stroke(0);
      line(x1, y1, x2, y2);
    }
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}


