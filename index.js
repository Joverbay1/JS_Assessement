document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Define the Maze layout and other variables/constants
  const maze = [
    // 0 - Pathways, 1 - Walls.
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1,
    ],
    [
      0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 0,
    ],
    [
      1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 1, 1,
    ],
    [
      1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 1, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
      1, 0, 1,
    ],
    [
      1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
      0, 0, 1,
    ],
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1,
    ],
  ];

  // Difine Pac-Man objects and properties
  const pacMan = {
    x: canvas.width / 2, // x position of pac-man
    y: canvas.height / 2, // y position of pac-man
    size: 20, // size of pac-man
    speed: 2, // pac-man speed
    dx: 2,
    dy: 0,
  };

  const tileSize = 20; // Size of each tile in pixels
  const dotRadius = 3; // Radius of the dots
  const powerPelletSize = 8; // Size of the power pellets

  const powerPellets = [
    // Define the positions of power pellets in the maze
    { row: 4, col: 6 },
    { row: 23, col: 2 },
    { row: 3, col: 26 },
    { row: 8, col: 14 },
    { row: 20, col: 10 },
    { row: 8, col: 1 },
    { row: 17, col: 19 },
    { row: 29, col: 24 },
    { row: 14, col: 6 },
    { row: 29, col: 6 },
    // Add more power pellet positions as needed
  ];

  // Define the Ghost objects and properties
  const ghosts = [
    {
      x: 13 * tileSize, // x position of ghost
      y: 14 * tileSize, // y position of ghost
      speed: 1, // ghost speed
      color: "red", // ghost color
    },
    {
      x: 12 * tileSize,
      y: 16 * tileSize,
      speed: 2,
      color: "hotpink",
    },
    {
      x: 15 * tileSize,
      y: 16 * tileSize,
      speed: 2,
      color: "orange",
    },
    {
      x: 16 * tileSize,
      y: 14 * tileSize,
      speed: 2,
      color: "lightseagreen",
    },
  ];

  // Collision Detection
  function checkCollision() {
    // Check collision between Pac-Man and walls
    const pacManTileX = Math.floor(pacMan.x / tileSize);
    const pacManTileY = Math.floor(pacMan.y / tileSize);
    if (maze[pacManTileY][pacManTileX] === 1) {
      // Collision with wall
      // Handle collision logic (Pac-Man is reset to his pevious position before collision with wall)
      handleWallCollision();
    }

    // Check collision between Pac-Man and ghosts
    ghosts.forEach((ghost) => {
      const dx = pacMan.x - ghost.x;
      const dy = pacMan.y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < tileSize * 0.8) {
        // Collision with ghost
        // Handle collision logic (e.g., decrease lives, reset positions, etc.)
      }
    });
    // Handle Wall Collision
    function handleWallCollision() {
      // Adjust Pac-Man's position to prevent moving into the wall
      // For example:
      pacMan.x -= pacMan.direction.dx * pacMan.speed;
      pacMan.y -= pacMan.direction.dy * pacMan.speed;

      // Additional handling logic (e.g., decrease lives, show game over screen, etc.)
    }
  }

  // Ghosts movement behavor
  function moveGhostRandom(ghost) {
    // Generate random movement direction
    const directions = [
      { dx: -1, dy: 0 }, // Left
      { dx: 1, dy: 0 }, // Right
      { dx: 0, dy: -1 }, // Up
      { dx: 0, dy: 1 }, // Down
    ];

    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    // Move the ghost in the random direction
    ghost.x += randomDirection.dx * ghost.speed;
    ghost.y += randomDirection.dy * ghost.speed;
  }

  function moveGhost(ghost) {
    moveGhostRandom(ghost);
  }

  function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        const tileX = col * tileSize;
        const tileY = row * tileSize;
        const tile = maze[row][col];

        if (tile === 1) {
          // Draw walls
          ctx.fillStyle = "blue";
          ctx.fillRect(tileX, tileY, tileSize, tileSize);
        } else if (tile === 0) {
          // Draw pathways
          ctx.fillStyle = "black";
          ctx.fillRect(tileX, tileY, tileSize, tileSize);
          // Draw dots on the pathways
          drawDot(tileX + tileSize / 2, tileY + tileSize / 2);
        }
      }
    }

    // Draw power pellets
    ctx.fillStyle = "purple";
    powerPellets.forEach((powerPellet) => {
      const pelletX = powerPellet.col * tileSize + tileSize / 2;
      const pelletY = powerPellet.row * tileSize + tileSize / 2;
      ctx.beginPath();
      ctx.arc(pelletX, pelletY, powerPelletSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  }

  function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  function drawGhost(ghost) {
    const ghostRadius = tileSize / 1.25; // Adjust the size of the ghost
    ctx.beginPath();
    ctx.arc(ghost.x, ghost.y, ghostRadius, 2, Math.PI * 2);
    ctx.fillStyle = ghost.color;
    ctx.fill();
    ctx.closePath();
  }

  function drawPacMan() {
    ctx.beginPath();
    ctx.arc(pacMan.x, pacMan.y, pacMan.size, 0.2 * Math.PI, 1.8 * Math.PI); // Simple Pac-Man shape
    ctx.lineTo(pacMan.x, pacMan.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Game Loop
  function update() {
    clear();
    drawMaze();
    drawDot();
    ghosts.forEach((ghost) => {
      moveGhost(ghost);
      drawGhost(ghost);
    });

    // Store Pac-Man's previous position for collision handling
    pacMan.previousX = pacMan.x;
    pacMan.previousY = pacMan.y;

    drawPacMan();

    // Update Pac-Man's position
    pacMan.x += pacMan.dx;
    pacMan.y += pacMan.dy;

    checkCollision();

    requestAnimationFrame(update); // Call update again
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

  // Register the event listener and start the game loop
  document.addEventListener("keydown", movePacMan);

  update(); // Start the game loop
});
