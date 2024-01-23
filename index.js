document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  // Define the Maze layout
  const maze = [
    // 0 - dots, 1 - Walls.
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

  // Define the game state
  const gameState = {
    score: 0,
    lives: 3,
    gameover: false,
  };

  let score = 0;
  let lives = 3;

  // Dot variables
  let dots = [
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
    [2, 10],
    [2, 13],
    [2, 14],
    [2, 15],
    [2, 16],
    [2, 19],
    [2, 20],
    [2, 21],
    [2, 22],
    [2, 23],
    [2, 24],
    [2, 25],
    [2, 26],
    [2, 27],
    [3, 2],
    [3, 7],
    [3, 10],
    [3, 13],
    [3, 16],
    [3, 19],
    [3, 22],
    [3, 27],
    [4, 2],
    [4, 7],
    [4, 10],
    [4, 13],
    [4, 16],
    [4, 19],
    [4, 22],
    [4, 27],
    [5, 2],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 10],
    [5, 13],
    [5, 16],
    [5, 19],
    [5, 22],
    [5, 23],
    [5, 24],
    [5, 27],
    [6, 2],
    [6, 5],
    [6, 10],
    [6, 12],
    [6, 13],
    [6, 16],
    [6, 17],
    [6, 18],
    [6, 19],
    [6, 24],
    [6, 27],
    [7, 2],
    [7, 5],
    [7, 10],
    [7, 19],
    [7, 24],
    [7, 27],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 10],
    [8, 19],
    [8, 22],
    [8, 23],
    [8, 24],
    [8, 25],
    [8, 26],
    [8, 27],
    [9, 2],
    [9, 7],
    [9, 10],
    [9, 11],
    [9, 12],
    [9, 13],
    [9, 14],
    [9, 15],
    [9, 16],
    [9, 17],
    [9, 18],
    [9, 19],
    [9, 22],
    [9, 27],
    [10, 2],
    [10, 7],
    [10, 10],
    [10, 19],
    [10, 22],
    [10, 27],
    [11, 2],
    [11, 7],
    [11, 10],
    [11, 19],
    [11, 22],
    [11, 27],
    [12, 2],
    [12, 3],
    [12, 4],
    [12, 5],
    [12, 6],
    [12, 7],
    [12, 8],
    [12, 9],
    [12, 10],
    [12, 11],
    [12, 12],
    [12, 13],
    [12, 14],
    [12, 15],
    [12, 16],
    [12, 17],
    [12, 18],
    [12, 19],
    [12, 20],
    [12, 21],
    [12, 22],
    [12, 23],
    [12, 24],
    [12, 25],
    [12, 26],
    [12, 27],
    [13, 2],
    [13, 10],
    [13, 14],
    [13, 15],
    [13, 19],
    [13, 27],
    [14, 2],
    [14, 10],
    [14, 12],
    [14, 13],
    [14, 14],
    [14, 15],
    [14, 16],
    [14, 17],
    [14, 19],
    [14, 27],
    [15, 2],
    [15, 3],
    [15, 4],
    [15, 5],
    [15, 6],
    [15, 7],
    [15, 10],
    [15, 12],
    [15, 13],
    [15, 14],
    [15, 15],
    [15, 16],
    [15, 17],
    [15, 19],
    [15, 22],
    [15, 23],
    [15, 24],
    [15, 25],
    [15, 26],
    [15, 27],
    [16, 2],
    [16, 7],
    [16, 10],
    [16, 12],
    [16, 13],
    [16, 14],
    [16, 15],
    [16, 16],
    [16, 17],
    [16, 19],
    [16, 22],
    [16, 27],
    [17, 2],
    [17, 7],
    [17, 10],
    [17, 12],
    [17, 13],
    [17, 14],
    [17, 15],
    [17, 16],
    [17, 17],
    [17, 19],
    [17, 22],
    [17, 27],
    [18, 2],
    [18, 5],
    [18, 6],
    [18, 7],
    [18, 8],
    [18, 9],
    [18, 10],
    [18, 19],
    [18, 20],
    [18, 21],
    [18, 22],
    [18, 23],
    [18, 24],
    [18, 27],
    [19, 2],
    [19, 5],
    [19, 10],
    [19, 11],
    [19, 12],
    [19, 13],
    [19, 14],
    [19, 15],
    [19, 16],
    [19, 17],
    [19, 18],
    [19, 19],
    [19, 24],
    [19, 27],
    [20, 2],
    [20, 5],
    [20, 10],
    [20, 19],
    [20, 24],
    [20, 27],
    [21, 1],
    [21, 2],
    [21, 3],
    [21, 4],
    [21, 5],
    [21, 6],
    [21, 7],
    [21, 10],
    [21, 11],
    [21, 12],
    [21, 13],
    [21, 16],
    [21, 17],
    [21, 18],
    [21, 19],
    [21, 22],
    [21, 23],
    [21, 24],
    [21, 25],
    [21, 26],
    [21, 27],
    [21, 28],
    [22, 7],
    [22, 10],
    [22, 13],
    [22, 16],
    [22, 19],
    [22, 22],
    [23, 7],
    [23, 10],
    [23, 13],
    [23, 16],
    [23, 19],
    [23, 22],
    [24, 2],
    [24, 3],
    [24, 4],
    [24, 5],
    [24, 6],
    [24, 7],
    [24, 8],
    [24, 9],
    [24, 10],
    [24, 13],
    [24, 14],
    [24, 15],
    [24, 16],
    [24, 19],
    [24, 20],
    [24, 21],
    [24, 22],
    [24, 23],
    [24, 24],
    [24, 25],
    [24, 26],
    [24, 27],
    [25, 2],
    [25, 5],
    [25, 10],
    [25, 19],
    [25, 24],
    [25, 27],
    [26, 2],
    [26, 5],
    [26, 6],
    [26, 7],
    [26, 10],
    [26, 19],
    [26, 22],
    [26, 23],
    [26, 24],
    [26, 27],
    [27, 2],
    [27, 7],
    [27, 10],
    [27, 11],
    [27, 12],
    [27, 13],
    [27, 14],
    [27, 15],
    [27, 16],
    [27, 17],
    [27, 18],
    [27, 19],
    [27, 22],
    [27, 27],
    [28, 2],
    [28, 7],
    [28, 10],
    [28, 19],
    [28, 22],
    [29, 27],
    [30, 2],
    [30, 7],
    [30, 10],
    [30, 11],
    [30, 12],
    [30, 13],
    [30, 14],
    [30, 15],
    [30, 16],
    [30, 17],
    [30, 18],
    [30, 19],
    [30, 22],
    [30, 23],
    [30, 24],
    [30, 25],
    [30, 26],
    [30, 27],
  ];

  // Define Pac-Man
  const pacMan = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    speed: 2,
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

  // Define the Ghost objects
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
      speed: 1,
      color: "hotpink",
    },
    {
      x: 15 * tileSize,
      y: 16 * tileSize,
      speed: 1,
      color: "orange",
    },
    {
      x: 16 * tileSize,
      y: 14 * tileSize,
      speed: 1,
      color: "lightseagreen",
    },
  ];

  // Function to check collision between Pac-Man and ghosts
  function checkCollision() {
    for (let i = 0; i < ghosts.length; i++) {
      const ghost = ghosts[i];
      // Calculate distance between Pac-Man and the ghost
      const dx = pacMan.x - ghost.x;
      const dy = pacMan.y - ghost.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Check if there is a collision
      if (distance < 10) {
        // Adjust the threshold as needed
        // Pac-Man collided with a ghost
        gameState.lives--; // Decrement the number of lives

        if (gameState.lives <= 0) {
          // Game over condition: No more lives left
          gameState.gameover = true;
          // Add code to handle game over, such as displaying a message or restarting the game
        } else {
          // Reset Pac-Man's position
          pacMan.x = 0;
          pacMan.y = 0;
          // Add any additional logic for resetting game state after collision
        }
      }
    }
  }

  // Check if Pac-Man collides with a wall
  const TILE_SIZE = 20;

  function checkWallCollision() {
    const row = Math.floor(pacMan.y / TILE_SIZE);
    const col = Math.floor(pacMan.x / TILE_SIZE);

    // Check if Pac-Man is within the bounds of the maze
    if (row >= 0 && row < maze.length && col >= 0 && col < maze[row].length) {
      const currentTile = maze[row][col];
      if (currentTile === 1) {
        // Pac-Man collided with a wall

        // Reset Pac-Man's position to the previous valid position
        pacMan.x -= pacMan.dx;
        pacMan.y -= pacMan.dy;

        // Set Pac-Man's velocity or position to 0 to stop movement
        pacMan.dx = 0;
        pacMan.dy = 0;
      }
    }
  }

  // Check for collision with dots
  function checkDotCollision() {
    const pacManRow = Math.floor(pacMan.y / TILE_SIZE);
    const pacManCol = Math.floor(pacMan.x / TILE_SIZE);

    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      const dotRow = dot[1];
      const dotCol = dot[0];

      if (pacManRow === dotRow && pacManCol === dotCol) {
        // Dot collided with Pac-Man
        dots.splice(i, 1);
        // Remove the dot from the array
        score += 10;
        // Increase the score
        break;
      }
    }
  }

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

  // Game Loop
  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function update() {
    clear();
    drawMaze();
    drawDot();
    ghosts.forEach((ghost) => {
      moveGhostRandom(ghost);
      drawGhost(ghost);
    });

    // Compare the position of Pac-Man with each ghost
    if (pacMan.x === ghosts.x && pacMan.y === ghosts.y) {
      // Pac-Man collided with a ghost
      gameState.lives--;

      if (gameState.lives <= 0) {
        // Game Over condition: No more lives left
        gameState.gameOver = true;
        // Add code to handle game over, such as displaying a message or restarting the game
      } else {
        // Reset Pac-Man's position
        pacMan.x = 0;
        pacMan.y = 0;
        // Add any additional logic for resetting game state after collision
      }
    }

    // Update Pac-Man's position
    pacMan.x += pacMan.dx;
    pacMan.y += pacMan.dy;

    // Check for collisions with ghosts
    checkCollision();

    // Check wall collision
    checkWallCollision();

    // Check dot collision
    checkDotCollision();

    drawPacMan();

    // Call the update function recursively
    if (!gameState.gameOver) {
      requestAnimationFrame(update); // Call update again
    }
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
