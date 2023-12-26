const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const pad1Color = "lightblue";
const pad2Color = "red";
const padBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const padSpeed = 50;

let intervalID;
let ballSpeed = 1;
let ballX = gameWidth/2;
let ballY = gameHeight/2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let plyer2Score = 0;
let pad1 = {
  width: 25,
  height: 100,
  x: 0,
  y: 0
};
let pad2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
  createBall();
  nextTick();
};

function nextTick(){
  intervalID = setTimeout(()=>{
    clearBoard();
    drawPad();
    moveBall();
    drawBall(ballX, ballY);
    checkCollission();
    nextTick();
  }, 10)
};

function clearBoard(){
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
};

function drawPad(){
  ctx.strokeStyle = padBorder;

  ctx.fillStyle = pad1Color;
  ctx.fillRect(pad1.x, pad1.y, pad1.width, pad1.height);
  ctx.strokeRect(pad1.x, pad1.y, pad1.width, pad1.height);

  ctx.fillStyle = pad2Color;
  ctx.fillRect(pad2.x, pad2.y, pad2.width, pad2.height);
  ctx.strokeRect(pad2.x, pad2.y, pad2.width, pad2.height);
};

function createBall(){};

function moveBall(){};

function drawBall(ballX, ballY){
  ctx.fillStyle = ballColor;
  ctx.strokeStyle = ballBorderColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ballX, ballY, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
};

function checkCollission(){};

function changeDirection(event){

  const keyPressed = event.keyCode;
  const pad1Up = 87;
  const pad1Down = 83;
  const pad2Up = 38;
  const pad2Down = 40;

  switch (keyPressed){
    case (pad1Up):
      if (pad1.y > 0) {
        pad1.y -= padSpeed;
      }
      break;
    case (pad1Down):
      if (pad1.y < gameHeight - pad1.height) {
        pad1.y += padSpeed;
      }
      break;
    case (pad2Up):
      if (pad2.y > 0) {
        pad2.y -= padSpeed;
      }
      break;
    case (pad2Down):
      if (pad2.y < gameHeight - pad2.height) {
        pad2.y += padSpeed;
      }
      break;
  }
};


function updateScore(){};

function resetGame(){};