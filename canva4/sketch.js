let agents = [];
let showIntro = true;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(100);
  fill(0);

  for (let i = 0; i < 1000; i++) {
    agents.push(new Agent(random(width), random(height)));
  }
}

function draw() {
  background(255, 60 , 220);

  // Affiche les points 
  for (let a of agents) {
    a.update(showIntro); 
    a.display();
  }

  // Affiche le texte seulement si intro est active
  if (showIntro) {
    text("why?", width / 2, height / 2);
  }
}

function mouseMoved() {
  // Lance l'interaction dès le premier mouvement
  showIntro = false;
}

class Agent {
  constructor(x, y) {
    this.home = createVector(x, y);
    this.pos = this.home.copy();
  }

  update(isIntro) {
    if (isIntro) return; // pas d'interaction pendant l'intro

    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.pos, mouse);
    let d = dir.mag();

    if (d < 120) {
      dir.normalize();
      let moveAway = dir.mult(map(d, 10, 160, 300, 0));
      this.pos.add(moveAway);
    } else {
      let toHome = p5.Vector.sub(this.home, this.pos);
      this.pos.add(toHome.mult(0.06));
    }
  }

  display() {
    fill(0);
    ellipse(this.pos.x, this.pos.y, 6);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('nom_image', 'png'); // Sauvegarde l'image en appuyant sur 's'
  }
}
