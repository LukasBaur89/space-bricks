class Ball{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;

        //requiremenets
        this.ballX = 30;
        this.ballY = 30;
        // this.ballSpeedX = 5;
        // this.ballSpeedY = 5;
        this.ballSpeed = 5
        this.directionX = 1
        this.directionY = 1
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
            this.directionY *= -1
        }
        if(this.ballY <= 20){
            // this.ballSpeedY += 1
            this.directionY *= -1
        }
        

    }

    // add method bounceOnSpaceship (reverty)
    bounceOnSpaceship() {
        this.directionY *= -1
    }



}