let img;
let lastSwitchTime = 0;
let currentBgColor;

function preload() {
  img = loadImage('img4.png');
}

function setup() {
  createCanvas(500, 500);
  noStroke();
  pixelDensity(1);

  // Appliquer une légère altération 
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    img.pixels[i] += random(-20, 20);     // Rouge
    img.pixels[i + 1] += random(-20, 20); // Vert
    img.pixels[i + 2] += random(-20, 20); // Bleu
  }
  img.updatePixels();

  currentBgColor = color(random(255), random(255), random(255));
}

function draw() {
  // Changer la couleur de fond 10 fois par seconde sans fondu
  if (millis() - lastSwitchTime > 500) {
    currentBgColor = color(random(255), random(255), random(255));
    lastSwitchTime = millis();
    clear(); // Efface immédiatement tout avant de redessiner
  }

  background(currentBgColor);

  // Afficher l'image 
  image(img, 0, 0, width, height);

  // Application de traitements de l'image  
  blendMode(OVERLAY);
  fill(255, 50, 150, 60);
  rect(0, 0, width, height);

  blendMode(SOFT_LIGHT);
  fill(0, 180, 255, 60);
  rect(0, 0, width, height);
}


function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}