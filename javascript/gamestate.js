class Gamestate {
    constructor(canvas, ctx, game){
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;

        // requirements
        this.splashScreen = document.querySelector(".splash-screen");
        this.gameScreen = document.querySelector(".game-screen");
        this.gameOverScreen = document.querySelector(".game-over-screen");
        this.winScreen = document.querySelector(".game-win-screen");
  
        this.startGameBtn = document.querySelector("#start");
        this.restartGameBtn = document.querySelector("#restart");
        this.playAgainBtn = document.querySelector("#play-again")

        this.startGame();
        this.restartGame();
    }

    // Splash Screen
    showSplashScreen(){
        this.splashScreen.classList.remove("hidden");
        this.gameScreen.classList.add("hidden");
        this.gameOverScreen.classList.add("hidden");
        this.winScreen.classList.add("hidden") ;
    }

    // Game Screen - Win - Gameover
    showGameScreen(){
        this.splashScreen.classList.add("hidden");
        this.gameScreen.classList.remove("hidden");
        this.gameOverScreen.classList.add("hidden");
        this.winScreen.classList.add("hidden");
        this.game.updateAll();
    }


    showGameOverScreen(){
        this.splashScreen.classList.add("hidden");
        this.gameScreen.classList.add("hidden");
        this.gameOverScreen.classList.remove("hidden");
        this.winScreen.classList.add("hidden");
    }
    
    showWinGameScreen(){
        this.splashScreen.classList.add("hidden");
        this.gameScreen.classList.add("hidden");
        this.gameOverScreen.classList.add("hidden");
        this.winScreen.classList.remove("hidden");
    }


    startGame(){
        this.startGameBtn.onclick = () =>{ this.showGameScreen()}
    }

    restartGame(){
        this.restartGameBtn.onclick =  () =>{
            this.game.reset(); 
            this.showSplashScreen()
        }
        this.playAgainBtn.onclick =  () =>{
            this.game.reset(); 
            this.showSplashScreen()
        }
    }


}