class Sound{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        
        this.soundOnButton = document.querySelector("#sound-on");
        this.soundOffButton = document.querySelector("#sound-off");

        this.soundOn = new Audio("/audio/1.mp3");
        this.soundOn.volume = .15;
        this.soundOn.preload = "auto";
        this.soundOn.load();     
        
        this.soundTurnOn();
        this.soundTurnOff();

    }

    // add sound

    soundTurnOn(){
        this.soundOnButton.onclick =()=>{
            this.soundOn.play()
            this.soundOn.loop = true;
        }
    }

    soundTurnOff(){
        this.soundOffButton.onclick = () => {
            this.soundOn.pause()
        }
    }


}