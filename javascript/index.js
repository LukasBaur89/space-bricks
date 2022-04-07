/* const { Howl } = require("../../howler.js/dist/howler"); */

// define class
class Game {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.background= null;
        this.ball = null;
        this.spaceship = null;
        this.brick = null;
        /* const sound = new Howl({
            urls: []
        }).play() */

        /* this.startBtn = document.querySelector(".start");
        this.restartBtn = document.querySelector(".restartBtn"); */

        this.init();
       
    }

    // create new class instances
    init() {
        // new Game
        this.showGame = new Gamestate (this.canvas, this.ctx, this);
        
        this.showGame.showSplashScreen();
        

        // background
        this.background = new Background(this.canvas, this.ctx);
        // ball
        this.ball = new Ball(this.canvas, this.ctx, this.showGame);
        //spaceship
        this.spaceship = new Spaceship(this.canvas, this.ctx, this.ball);
        // brick
        this.brick = new Brick(this.canvas, this.ctx, this.ball) 
    }
    
    
    updateAll() {
        const intervalId = setInterval(() => {
            this.clearCanvas();
            this.background.move();
            this.background.draw();
            this.ball.draw();
            this.ball.move();
            this.ball.bounce();
            this.spaceship.draw();
            this.brick.drawAllBricks();
            this.brick.collisionWithBallAndBricks()
            this.brick.drawScore();
            // o: new bricks drawn as array
            // only call if you collide with the spaceship
            if(this.spaceship.collisionCheck()) {
                // revert the ball direction
                this.ball.bounceOnSpaceship()
            }
            
        },1000/60)
    }

    clearCanvas(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
    

    reset(){
        cancelAnimationFrame(this.intervalId);
        this.background = null;
        this.ball = null;
        this.spaceship = null;
        this.brick = null;
    
    }


}

const game = new Game();
game.updateAll();

