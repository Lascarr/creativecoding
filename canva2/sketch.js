let bursts = [];
let showIntro = true;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  noFill();
  stroke(255);
  strokeWeight(1.2);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(100);
  fill(230);
  noStroke();
}

function draw() {
  background(0, 100); 

  if (showIntro) {
    text("click", width / 2, height / 2);
  }

  for (let i = bursts.length - 1; i >= 0; i--) {
    let b = bursts[i];
    b.update();
    b.display();

    if (b.life <= 0) {
      bursts.splice(i, 1);
    }
  }
}

function mousePressed() {
  if (showIntro) {
    showIntro = false; // masque "clic"
  }
  // On ajoute une explosion au clic
  bursts.push(new Burst(mouseX, mouseY));
}

class Burst {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 320;
    this.angle = random(160);
    this.numLines = int(random(6, 20));
    this.rotationSpeed = random(-1, 0);
  }

  update() {
    this.life--;
    this.angle += this.rotationSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    let alpha = map(this.life, 0, 100, 0, 255);
    stroke(230, 20, 230, alpha);
    for (let i = 0; i < this.numLines; i++) {
      let a = map(i, 0, this.numLines, 0, 360);
      let r = map(sin(this.life * 2 + i * 10), -1, 1, 10, 60);
      let x = cos(a) * r;
      let y = sin(a) * r;
      line(0, 0, x, y);
    }
    pop();
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}