document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Game state
  let gameState = "start";

  function changeGameState(state) {
    gameState = state;
  }

  // start the game
  changeGameState("playing");

  // Map configuration
  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const wallSize = canvas.width / map[0].length;

  function drawMap() {
    for (let row = 0; row < map.length; row++) {
      for (let col = 0; col < map[row].length; col++) {
        if (map[row][col] === 1) {
          ctx.fillStyle = "blue";
          ctx.fillRect(col * wallSize, row * wallSize, wallSize, wallSize);
        }
      }
    }
  }

  const pacMan = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    speed: 2,
    dx: 2,
    dy: 0,
  };

  function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacMan.x, pacMan.y, pacMan.size, 0.2 * Math.PI, 1.8 * Math.PI); // Simple Pac-Man shape
    ctx.lineTo(pacMan.x, pacMan.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  function drawDots() {
    for (let row = 0; row < map.length; row++) {
      for (let col = 0; col < map[row].length; col++) {
        if (map[row][col] === 0) {
          ctx.beginPath();
          ctx.arc(
            col * wallSize + wallSize / 2,
            row * wallSize + wallSize / 2,
            wallSize / 4,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  function checkDotCollision() {
    // Function to check collision with dots and update the map
    const pacManCurrentRow = Math.floor(pacMan.y / wallSize);
    const pacManCurrentCol = Math.floor(pacMan.x / wallSize);
    if (map[pacManCurrentRow][pacManCurrentCol] === 0) {
      map[pacManCurrentRow][pacManCurrentCol] = 2; // update the map to indicate the dot has been eaten
      // increase score or any other required action
    }
  }

  // Ghost configuation
  const ghosts = [
    {
      x: 50,
      y: 50,
      size: 20,
      speed: 1,
      dx: 1,
      dy: 0,
      color: "red",
    },
    {
      x: 100,
      y: 50,
      size: 20,
      speed: 1,
      dx: 1,
      dy: 0,
      color: "pink",
    },
    // add more ghost as needed
  ];

  function drawGhost(ghost) {
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghost.size, 0, Math.PI * 2); // full circle for ghost body
    ctx.fillStyle = ghost.color;
    ctx.fill();

    // Eyes
    ctx.beginPath();
    ctx.arc(
      ghost.x - ghost.size / 3,
      ghost.y - ghost.size / 3,
      ghost.size / 6,
      0,
      Math.PI * 2
    );
    ctx.arc(
      ghost.x + ghost.size / 3,
      ghost.y - ghost.size / 3,
      ghost.size / 6,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.closePath();
  }

  function moveGhosts() {
    ghosts.forEach((ghost) => {
      // simple AI for ghost to move randomly
      ghost.x += ghost.dx;
      ghost.y += ghost.dy;

      // change direction randomly
      if (Math.random() < 0.1) {
        ghost.dx = ghost.speed * (Math.random() < 0.5 ? -1 : 1);
        ghost.dy = ghost.speed * (Math.random() < 0.5 ? -1 : 1);
      }

      // keep ghost within canvas boundaries
      if (ghost.x < ghost.size || ghost.x > canvas.width - ghost.size) {
        ghost.dx *= -1;
      }
      if (ghost.y < ghost.size || ghost.y > canvas.height - ghost.size) {
        ghost.dy *= -1;
      }
    });
  }

  function drawGhosts() {
    ghosts.forEach(drawGhost);
  }

  function update() {
    clear();
    drawMap();
    drawDots();
    drawPacMan();
    checkDotCollision();
    drawGhosts();
    moveGhosts();

    // Update Pac-Man's position
    pacMan.x += pacMan.dx;
    pacMan.y += pacMan.dy;

    // update ghost position
    moveGhosts();

    requestAnimationFrame(update); // Call update again
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function movePacMan(e) {
    pacMan.dx = 0;
    pacMan.dy = 0;
    const speed = pacMan.speed;

    // Arrow key movements
    if (e.key === "ArrowUp") pacMan.dy = -speed;
    if (e.key === "ArrowDown") pacMan.dy = speed;
    if (e.key === "ArrowLeft") pacMan.dx = -speed;
    if (e.key === "ArrowRight") pacMan.dx = speed;
  }

  document.addEventListener("keydown", movePacMan);

  let score = 0;
  let lives = 3;

  function updateScore(points) {
    score += points;
    console.log("score:", score);
    // Update the score display
    // TODO: Implement the UI element to display the score
  }

  function loseLife() {
    lives -= 1;
    // Update lives display
    // TODO: Implement the UI element to display lives
    console.log("Lives:", lives);
    if (lives <= 0) {
      gameOver();
    }
  }

  function gameOver() {
    console.log("Game Over!");
    // TODO: Implement game over logic and UI
  }

  let lastTime = 0;
  const fps = 60;
  const nextFrame = 1000 / fps; // time per frame in ms

  function gameLoop(timestamp) {
    if (!lastTime || timestamp - lastTime >= nextFrame) {
      lastTime = timestamp;
      update();
    }
    requestAnimationFrame(gameLoop);
  }

  update(); // Start the game loop
});
