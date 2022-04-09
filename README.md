# Project's name
SpaceBricks

## Description
SpaceBricks is a recreated browser game, originated from the most popular arcarde game Arnaknoid which was first built and published by Taito in 1986. The idea of my game is to have one player who has to destroy bricks using a ball and preventing it from falling off the playing field. The player wins the game when all bricks are destroyed. After that, a score is calculated based on the bricks the player destroyed. The player has three lives and looses the game if he misses to catch the ball with the platform. 


## MVP

- The game has a moving spaceship, a yellow ball and six rows of colored bricks
- the player uses the left and right arrow keys to move the platform
- the ball moves from the center towards the bottom of the screen
- once the player catches the ball, it will go up and destroy bricks on top of the screen
- the objective is to destroy all bricks 
- scoreboard on top right of the screen
- score increases by 10 points each brick is destroyed
- player has three lives in form of a heart being displayed on the top left screen
- player looses one live out of three when the ball falls off the playing field
- option to turn on and turn off game sound when clicking on a button


## Backlog
- add win-game screen and display score the player has reached
- add effects on spaceship, brick and ball
- removing a bug where the ball slides on the spaceship
- add realistic ball physics
- option to play game on extreme mode (changes brick color every ms)
- increase moving speed of ball and spaceship
- add walls


## Data structure

index.js (Game class)
- init() -> creates new class instances
- updateAll() -> calling each method of class in setInterval()
- clearCanvas() -> clearRect()
- reset() -> clearInterval and initialize new game


background.js
init() -> get new Image
draw() --> check if image is loaded correctly
move() --> adds moving background


ball.js
- draw() -> draw yellow ball
- move() -> move ball in random directions on the screen
- bounce() -> ball bounces of walls
- bounceOnSpaceship() -> reverts Y-axis
- resetBAll() -> position ball in center of screen
- drawLives() -> display lives on screen left, game-over when ball is lost three times


spaceship.js
-init() - get Spaceship image
-draw() - check if image is loaded correct
-createEventListeners() -> call method when user presses key
-move(e) -> define left and right arrow keys to move spaceship, prevent spaceship from leaving canvas
-collisionCheck() - check collision on spaceship edges with ball


brick.js
-createBrickArray() -> create 2d grid
-drawAllBricks() -> draw bricks on grid
-collisionWithBallAndBricks() ->check using nested for loop
-removeBrick()
-drawScore()-> draw score on top right
-drawRandomColor() ->create rgb pattern to display each brick in a different color when game loads


gamestate.js
-showSplashScreen()
-showGameScreen()
-showGameOverScreen()
-showWinGameScreen()
-startGame() -> press start button and being directed to game-screen
-restartGame() -> restarts game



sound.js
-soundTurnOn() -> play infinite sound loop when user clicks on "Sound-on" button
-soundTurnOff() -> stops playing sound



## States Transitions

- The game consists of three screen sequences
- A splash-screen that displays instructions on how to move the spaceship
- a game-screen that consists of a spaceship, a ball and 6 rows of colored bricks
- a game-over screen that has the option to restart the game


## Task

https://trello.com/b/MwKXsJsG/js-spacebricks-project-planning




## Additional Links
https://github.com/LukasBaur89/space-bricks
https://lukasbaur89.github.io/space-bricks/



### Slides
[Link Slides.com](http://slides.com)