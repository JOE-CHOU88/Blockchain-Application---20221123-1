let bodies = [];
let eyes = [];
let faces = [];
let hairs = [];
let mouths = [];

function preload() {
  for (let i = 0; i < 4; i++) {
    bodies[i] = loadImage("images/body-" + i + ".png");
    eyes[i] = loadImage("images/eye-" + i + ".png");
    hairs[i] = loadImage("images/hair-" + i + ".png");
    mouths[i] = loadImage("images/mouth-" + i + ".png");
  }
  for (let i = 0; i < 3; i++) {
    faces[i] = loadImage("images/face-" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  background(200);

  let faceIndex = floor(random(0, 3));
  image(faces[faceIndex], 0, 0, width, height);

  let bodyIndex = floor(random(0, 4));
  image(bodies[bodyIndex], 0, 0, width, height);

  let eyeIndex = floor(random(0, 4));
  image(eyes[eyeIndex], 0, 0, width, height);

  let hairIndex = floor(random(0, 4));
  image(hairs[hairIndex], 0, 0, width, height);

  let mouthIndex = floor(random(0, 4));
  image(mouths[mouthIndex], 0, 0, width, height);
}

function draw() {}
