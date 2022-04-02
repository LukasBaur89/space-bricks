class Ball{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;

        //requiremenets
        this.ballX = 30;
        this.ballY = 30;
        this.ballSpeedX = 3;
        this.ballSpeedY = 3;
    }

    draw(){
        this.ctx.fillStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.arc(this.ballX, this.ballY, 20, 0, Math.PI*2, true);
        this.ctx.fill();
    }

    move(){
        //make the ball move
        this.ballX+=this.ballSpeedX
        this.ballY+=this.ballSpeedY

        
        /* if(ballY > this.canvas.height){
            this.ballSpeedY *= -1
        } */
    }

    bounce(){
        if(this.ballX > this.canvas.width-30){
            this.ballSpeedX -= 1
        }
        if(this.ballX < 30){
            this.ballSpeedX += 1
        }
        if(this.ballY > this.canvas.height-30){
            this.ballSpeedY -= 1
        }
        if(this.ballY < 30){
            this.ballSpeedY += 1
        }
        

    }


    // reset ball position to the center if ball leaves bottom screen

}