// define class
class Game {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.background= null;
        this.ball = null;
        this.spaceship = null;
        this.velocity = 1;

        this.init();
       
    }

    // create new class instances
    init() {
        // create new background
        this.background = new Background(this.canvas, this.ctx);
        // ball
        this.ball = new Ball(this.canvas, this.ctx);
        //spaceship
        this.spaceship = new Spaceship(this.canvas, this.ctx, this.ball);

       
    }


    updateAll() {
        // update background
        // add movemenet
        setInterval(() => {
            this.clearCanvas();
            this.background.move();
            this.background.draw();
            this.ball.draw();
            this.ball.move();
            this.ball.bounce();
            this.spaceship.draw();
                // only call if you collide with the spaceship
            if(this.spaceship.collisionCheck()) {
                // revert the ball direction
                this.ball.bounceOnSpaceship()
            }
        },1000/60)
    }
    
    movement(){
    }


    clearCanvas(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

}

const game = new Game()
game.updateAll()
game.movement()
