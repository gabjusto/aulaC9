var box;

function setup() {
  createCanvas(500, 500);

  box = createSprite(250,250,50,50);
  box.shapeColor = "#4a2a7a";
}

function draw() {
  background("#3c9948");

  if(keyDown("up")) {
    box.y = box.y -2;
  }
  if(keyDown("down")) {
    box.y = box.y +2;
  }
  if (keyDown("space")) {
    background("#fcc708")
  }
  drawSprites();
}

