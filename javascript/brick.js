class Brick{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;

        // define brick object
        this.brickRows = 5;
        this.brickColumns = 20;
        
    
        this.brickX = 0,
        this.brickY = 0,
        this.width = 50,
        this.height = 25,
        this.spaceBetweenX = 20,
        this.spaceBetweenY = 20,
        this.color = "white"
        

        this.brickArray = [];
        }
            
        drawBrickGrid(){
            // create grid: loop over brickRows, brickColumns
            // create rows
            for(let r=0; r<this.brickRows; r++){
                this.brickArray[r] = [];
                // create columns
                for(let c=0; c<this.brickColumns; c++){
                    // crete brickX and Y on grid
                    this.brickArray[r][c] = {
                        brickX: c*(this.spaceBetweenX + this.width) + this.spaceBetweenX,
                        brickY: r*(this.spaceBetweenY + this.height) + this.spaceBetweenY,
                        status: true,
                    };     
                }
            }
        }

        drawAllBricks(){
            // draw all bricks using for loop
            for (let r=0; r<this.brickRows; r++){
                for(let c=0; c<this.brickColumns; c++){
                    // check if brick loads correctly, then draw bricks
                    if(this.brickArray[r][c].status){
                        this.ctx.fillStyle = this.color
                        this.ctx.fillRect(this.brickArray[r][c].brickX, this.brickArray[r][c].brickY, this.width, this.height )
                    }
                }
            }
        } 
        
        
}




