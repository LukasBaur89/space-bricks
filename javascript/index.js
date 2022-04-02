// define class
class Game {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.background= null;
        this.ball = null;
        this.spaceship = null;
        this.velocity = 1;
        this.init()
    }

    
    init() {
        // create new background
        this.background = new Background(this.canvas, this.ctx);
        // ball
        this.ball = new Ball(this.canvas, this.ctx);
        //spaceship
        this.spaceship = new Spaceship(this.canvas, this.ctx);
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
        },1000/60)
    }
    
    movement(){
        this.spaceship.move();
    }


    clearCanvas(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }

  

    // check for collision



}


const game = new Game()
game.updateAll()
game.movement()
