// JavaScript: Iplementing the game logic:
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const gameOverScreen = document.getElementById("game-over");
  const finalScoreText = document.getElementById("final-score");
  const restartButton = document.getElementById("restart-button");

  const pacMan = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    speed: 2,
    dx: 2,
    dy: 0,
  };

  // Creating Ghosts objects
  const ghosts = [
    {
      x: 100,
      y: 100,
      size: 20,
      speed: 1,
      dx: 0,
      dy: 0,
    },
    {
      x: 200,
      y: 200,
      size: 20,
      speed: 1,
      dx: 0,
      dx: 0,
    },
    {
      x: 300,
      y: 300,
      size: 20,
      speed: 1,
      dx: 0,
      dx: 0,
    },
    {
      x: 400,
      y: 400,
      size: 20,
      speed: 1,
      dx: 0,
      dx: 0,
    },
  ];

  let score = 0;
  let isGameOver = false;

  function drawPacMan() {
    // Draw Pac-Man
    ctx.beginPath();
    ctx.arc(pacMan.x, pacMan.y, pacMan.size, 0.2 * Math.PI, 1.8 * Math.PI); // Simple Pac-Man shape
    ctx.lineTo(pacMan.x, pacMan.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();

    // Draw Ghost(s)
    for (let ghost of ghosts) {
      ctx.beginPath();
      ctx.arc(ghost.x, ghost.y, ghost.size, 0, 2 * Math.PI); // Simple Ghost shape
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }
  }

  function update() {
    if (isGameOver) {
      clear();
      drawPacMan();
      updateGhosts();

      // Update Pac-Man's position
      pacMan.x += pacMan.dx;
      pacMan.y += pacMan.dy;

      requestAnimationFrame(update); // Call update again
    }
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function updateGhosts() {
    // Move the ghost(s) towards Pac-Man
    for (let ghost of ghosts) {
      ghost.dx = pacMan.x > ghost.x ? ghost.speed : -ghost.speed;
      ghost.dy = pacMan.y > ghost.y ? ghost.speed : -ghost.speed;

      ghost.x += ghost.dx;
      ghost.y += ghost.dy;

      // Update the ghost's CSS position
      const ghostElement = document.getElementById(
        `ghost${ghosts.indexOf(ghost) + 1}`
      );
      ghostElement.style.left = `${ghost.x}px`;
      ghostElement.style.top = `${ghost.y}px`;
    }
  }

  function movePacMan(e) {
    pacMan.dx = 0;
    pacMan.dy = 0;
    const speed = pacMan.speed;

    function gameOver() {
      isGameOver = true;
      finalScoreText.textContent = `Final Score: ${score}`;
      gameOverScreen.style.display = "block";
    }

    function restartGame() {
      isGameOver = false;
      score = 0;
      pacMan.x = canvas.width / 2;
      pacMan.y = canvas.height / 2;
      pacMan.dx = 2;
      pacMan.dy = 0;
      gameOverScreen.style.display = "none";
      update();
    }

    // Arrow key movements
    if (e.key === "ArrowUp") pacMan.dy = -speed;
    if (e.key === "ArrowDown") pacMan.dy = speed;
    if (e.key === "ArrowLeft") pacMan.dx = -speed;
    if (e.key === "ArrowRight") pacMan.dx = speed;
  }

  restartButton.addEventListener("click", restartGame);
  document.addEventListener("keydown", movePacMan);

  update(); // Start the game loop
});
