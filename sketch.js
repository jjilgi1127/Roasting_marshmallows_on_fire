let ps;

function setup() {

  createCanvas(640, 360);
  background(120);

  ps = new ParticleSystem(createVector(width / 2, 360));
}

function draw() {
  ps.addParticle();
  ps.run();
  fill(60);
  rect(80,50,500,5);
  fill(96,60,20);
  rect(100,40,20,320);
  rect(540,40,20,320);
  fill(255);
  rect(200,37,100,30);
  rect(200 + 150 ,37,100,30);
}