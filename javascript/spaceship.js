class Spaceship{
    constructor(canvas,ctx, ball){
        this.canvas = canvas;
        this.ctx = ctx;
        this.spaceShipX = 500;
        this.spaceShipY = 700;
        this.width = 200;
        this.height = 200;
        this.speedX = 30;
        this.speedY = 30;
        this.ball = ball

        // use ball coordinates from ball.js
        // this.ballX = ball.ballX;
        // this.ballY = ball.ballY;

        

        this.init();
    }


    init(){
        this.image = new Image();
        this.image.src = "/images/spaceship.png"
        this.createEventListeners()
    }

    draw(){
        //check if spaceship is loaded
        if(this.image){
            this.ctx.drawImage(
                this.image,
                this.spaceShipX,
                this.spaceShipY,
                this.width,
                this.height,
            )
        }
    }

    // calling move method whenever I press a key, just creates one eventListener
    createEventListeners() {
        document.addEventListener("keydown", (event)=> this.move(event))
    }

   
    move(e){
        // define arrow keys to move spaceship
        
            switch(e.key){
                case "ArrowLeft":
                    // event.key === 37;
                    this.spaceShipX -= this.speedX;
                    break;
                case "ArrowRight":
                    // event.key === 39;
                    this.spaceShipX += this.speedX;
                    break;
            }

            // prevent spaceship from leaving canvas
            if(this.spaceShipX < 0){
                this.spaceShipX = 0
            }
            if(this.spaceShipX > this.canvas.width - this.width){
                this.spaceShipX-=this.speedX;
            }
    
    }

    


    collisionCheck(){
        
        const shipLeftEdge = this.spaceShipX;
        const shipRightEdge = shipLeftEdge + this.width;
        const shipTopEdge = this.spaceShipY;
        const shipBottomEdge = shipTopEdge + this.height;
        if(this.ball.ballX > shipLeftEdge
            && this.ball.ballX < shipRightEdge
            && this.ball.ballY > shipTopEdge
            && this.ball.ballY < shipBottomEdge){
             console.log("ironhack")   
                return true
            } else {
                return false
            }
    }

    




}