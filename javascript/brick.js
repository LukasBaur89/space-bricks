class Brick{
    constructor(canvas, ctx, ball){
        this.canvas = canvas;
        this.ctx = ctx;
        this.ball = ball;

        

        // default variables
        this.brickRows = 7;
        this.brickColumns = 20;
        
    
        this.brickX = 0,
        this.brickY = 0,
        this.width = 50,
        this.height = 25,
        this.spaceBetweenX = 20,
        this.spaceBetweenY = 20,
        this.color = "white"
        

        this.brickArray = [];
        console.log(this.brickArray)
        this.createBrickArray()
    }
            
        createBrickArray(){
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
                        status: 1,
                        // add value 2 and 3 status
                    };     
                }
            }
        }

        drawAllBricks(){
            // draw all bricks using for loop
            for (let r=0; r<this.brickRows; r++){
                for(let c=0; c<this.brickColumns; c++){
                    // check if brick loads correctly, then draw bricks
        
                    // console.log(this.brickArray[r][c].status ===0)
                    if(this.brickArray[r][c].status > 0){
                        this.ctx.fillStyle = this.color
                        this.ctx.fillRect(this.brickArray[r][c].brickX, this.brickArray[r][c].brickY, this.width, this.height )
                    }
                }
            }
        } 
              
        
        collisionWithBallAndBricks(){
            // if ball touches ball edges, return status status 0
            
            
            // loop over rows array
            for (let r=0; r<this.brickRows; r++){
            // loop over columns array
                for (let c=0; c<this.brickColumns; c++){
                    if(this.brickArray[r][c].status>0){
                        
                        const brickLeftEdge = this.brickArray[r][c].brickX;
                        const brickRightEdge = brickLeftEdge + this.width;
                        const brickTopEdge = this.brickArray[r][c].brickY;
                        const brickBottomEdge = brickTopEdge + this.height;
                           
                        if(this.ball.ballX > brickLeftEdge
                        && this.ball.ballX < brickRightEdge
                        && this.ball.ballY > brickTopEdge
                        && this.ball.ballY < brickBottomEdge){  
                            // should return status 0, invert directionY 
                            this.brickArray[r][c].status = 0;
                            this.removeBrick()
                           
                        }
                    }
  
                }

        }
    }

    // add sound when ball hits brick

    // when ball hits brick change color, when ball hits brick next time, remove brick

    // add score when ball hits brick
          
    
    removeBrick(){
        this.ball.directionY *= -1
    }



                    
        }; 




                
            

        





