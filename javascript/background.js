class Background {
    constructor(canvas,ctx){
        // setup default variables
        this.canvas = canvas;
        this.ctx = ctx;

        // requirements
        this.coordinateX = 0;
        this.coordinateY = 0;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.backgroundImage = null;
        this.movementSpeed = 2;
        this.init();
    }

    init(){
        // load new background image
        this.backgroundImage = new Image();
        this.backgroundImage.src = "/images/space.jpg"
    }


    draw(){
        // check if image is loaded correctly
        if(this.backgroundImage != null){
            // draw image
            this.ctx.drawImage(
                this.backgroundImage,
                this.coordinateX,
                this.coordinateY,
                this.width,
                this.height,
            );
            this.ctx.drawImage(
                // The image,
                this.backgroundImage,
                // x Coord,
                this.coordinateX,
                this.coordinateY - this.height,
                this.width,
                this.height
            );
            
        }
    }

    // add movement to background
    move() {
        this.coordinateY += this.movementSpeed;
        this.coordinateY%=this.height;


    }
    



}