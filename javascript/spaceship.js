class Spaceship{
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.spaceShipX = 500;
        this.spaceShipY = 700;
        this.width = 200;
        this.height = 200;
        this.speedX = 30;
        this.speedY = 30;
        this.init();
    }


    init(){
        this.image = new Image();
        this.image.src = "/images/spaceship.png"
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

   
    move(){
        // define arrow keys to move spaceship
        document.addEventListener("keydown", (event)=>{
            switch(event.key){
                case "ArrowLeft":
                    event.key === 37;
                    this.spaceShipX -= this.speedX;
                    break;
                case "ArrowRight":
                    event.key === 39;
                    this.spaceShipX += this.speedY;
                    break;
            }

            // spaceship position should not exceed width
            if(this.spaceShipX > this.canvas.width){
                this.canvas.innerWidth
            }
        })
    }


}