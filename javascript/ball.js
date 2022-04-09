class Ball{
    constructor(canvas, ctx, gamestate){
        this.canvas = canvas;
        this.ctx = ctx;
        this.gamestate = gamestate;

        this.ballX = 30;
        this.ballY = 30;
        this.ballSpeed = 5;
        this.directionX = 1;
        this.directionY = 1;

        this.lives = document.querySelector(".lives");
        this.livesRemaining = 3;

        this.resetBall();
        this.drawLives();
    }

    draw(){
        this.ctx.fillStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.arc(this.ballX, this.ballY, 20, 0, Math.PI*2, true);
        this.ctx.fill();
    }

    move(){
        //make the ball move
        this.ballX+=this.ballSpeed * this.directionX
        this.ballY+=this.ballSpeed * this.directionY

    }

    bounce(){
        //  *= to revert directions
        if(this.ballX > this.canvas.width-20){
            // this.ballSpeedX -= 1
            this.directionX *= -1 
        }
        if(this.ballX <= 20){
            // this.ballSpeedX += 1
            this.directionX *= -1
        }
        if(this.ballY > this.canvas.height-20){
            // this.ballSpeedY -= 1
            /* this.directionY *= -1 */
            
            this.drawLives();

        }
        if(this.ballY <= 20){
            // this.ballSpeedY += 1
            this.directionY *= -1
        }
        

    }

    // add method bounceOnSpaceship (revertY)
    bounceOnSpaceship() {
        this.directionY *= -1
    }

    // reset ball to middle of screen
    resetBall(){
        this.ballX = this.canvas.width/2;
        this.ballY = this.canvas.height-500
    }

    drawLives(){
        if(this.livesRemaining > 0){
            this.livesRemaining-=1;
            this.resetBall()
        } else {
            this.gamestate.showGameOverScreen();
        }

        this.ctx.fillStyle = "white";
        this.lives.innerHTML = this.livesRemaining;
    }



}