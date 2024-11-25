const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 200);

const coffeeImage = new Image();
coffeeImage.src = "miniGame/img/coffee.png";
const coffeeSpriteW = 64;
const coffeeSpriteH = 64;
let coffeeFrame = 0;

let gameFrame = 0;
const staggerFrames = 10;

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "#8f8f8f";
  ctx.fillRect(0, 140, 800, 60);
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  ctx.drawImage(
    coffeeImage,
    coffeeSpriteW * coffeeFrame,
    0,
    coffeeSpriteW,
    coffeeSpriteH,
    500,
    40,
    coffeeSpriteW * 2,
    coffeeSpriteH * 2
  );

  if (gameFrame % staggerFrames == 0) {
    if (coffeeFrame < 6) coffeeFrame++;
    else coffeeFrame = 0;
  }

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
