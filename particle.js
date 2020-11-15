class Particle {
  constructor(position) {
    this.acceleration = createVector(0, -0.1);
    this.velocity = createVector(random(-1.5,1.5), random(-1, 1));
    this.position = position.copy();
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -=4;
  }

  // Method to display
  display() {

    noStroke();
    fill(255,50+this.lifespan,0, this.lifespan);
    ellipse(this.position.x, this.position.y, 4, 10);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}