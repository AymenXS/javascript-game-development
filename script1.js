let playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', (e) => {
  playerState = e.target.value;
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 6876 / 12;
const spriteHeight = 5230 / 10;

let gameFrame = 0;
const staggerFrames = 3;
const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 7,
  },
  {
    name: 'dizzy',
    frames: 7,
  },
  {
    name: 'sit',
    frames: 7,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 7,
  },
  {
    name: 'getHit',
    frames: 7,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    location: [],
  };

  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.location.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});

(function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].location.length;
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].location[position].y;
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  gameFrame++;
  requestAnimationFrame(animate);
})();
