let playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
  playerState = e.target.value;
  frameX = 0;
});

const animationStates = {
  idle: { frames: 7 },
  jump: { frames: 7 },
  fall: { frames: 7 },
  run: { frames: 9 },
  dizzy: { frames: 11 },
  sit: { frames: 5 },
  roll: { frames: 7 },
  bite: { frames: 7 },
  ko: { frames: 12 },
  getHit: { frames: 4 },
};

const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

let gameFrame = 0;
const staggerFrames = 3;
let frameX = 0;
let frameY = Object.keys(animationStates).indexOf(playerState) * spriteHeight;

(function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(playerImage, frameX * spriteWidth, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  if (gameFrame % staggerFrames === 0) {
    if (frameX < animationStates[playerState].frames - 1) frameX++;
    else frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
})();
