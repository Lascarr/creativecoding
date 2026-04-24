let img;
let t = 0; // Variable pour animer le bruit

function preload() {
  // Charger une image depuis une URL ou un fichier local
  img = loadImage('img4.png'); 
}

function setup() {
  // Créer un canvas de 500x500 en mode WEBGL
  createCanvas(500, 500, WEBGL);
  textureMode(NORMAL);
  noStroke();
}

function draw() {
  background(215, 225, 225);

  let cols = 20; 
  let rows = 20;
  let spacingX = (width * 3) / cols; 
  let spacingY = (height * 3.3) / rows;

  // Caméra 
  perspective(PI / 3, width / height, 0.1, 5000);
  rotateX(PI / 6); // Inclinaison
  translate(-(width * 3) / 2, -(height * 3) / 2 - 150, 0); 

  texture(img);
  beginShape(TRIANGLES);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let posX = x * spacingX;
      let posY = y * spacingY;

      // Hauteur des pyramides 
      let pyramidHeight = noise(x * 0.2, y * 0.2, t) * 600 - 300;
      let halfSize = spacingX / 2;

      // Coordonner la texture en fonction de la position globale dans la grille
      let u0 = x / cols;
      let v0 = y / rows;
      let u1 = (x + 1) / cols;
      let v1 = (y + 1) / rows;

      // Faces de la pyramide avec mapping global
      vertex(posX - halfSize, posY - halfSize, 0, u0, v0);
      vertex(posX + halfSize, posY - halfSize, 0, u1, v0);
      vertex(posX, posY, pyramidHeight, (u0 + u1) / 2, (v0 + v1) / 2);

      vertex(posX + halfSize, posY - halfSize, 0, u1, v0);
      vertex(posX + halfSize, posY + halfSize, 0, u1, v1);
      vertex(posX, posY, pyramidHeight, (u0 + u1) / 2, (v0 + v1) / 2);

      vertex(posX + halfSize, posY + halfSize, 0, u1, v1);
      vertex(posX - halfSize, posY + halfSize, 0, u0, v1);
      vertex(posX, posY, pyramidHeight, (u0 + u1) / 2, (v0 + v1) / 2);

      vertex(posX - halfSize, posY + halfSize, 0, u0, v1);
      vertex(posX - halfSize, posY - halfSize, 0, u0, v0);
      vertex(posX, posY, pyramidHeight, (u0 + u1) / 2, (v0 + v1) / 2);
    }
  }

  endShape(CLOSE);

  t += 0.01; // Animation du bruit pour faire bouger les pyramides
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}