const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
  { name: 'idle', frames: 7 },
  { name: 'jump', frames: 7 },
];
animationStates.forEach((state, index) => {});

(function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrames) % 6;
  frameX = spriteWidth * position;
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
})();
