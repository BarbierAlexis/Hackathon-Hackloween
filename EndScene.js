class EndScene extends Phaser.Scene {
    constructor(){
      super({
        key: 'EndScene',
      });
    }
  
    preload(){
      this.cameras.main.fadeIn(1000)
      this.load.image('background2', './images/GameOver.png')
    }
  
    create(){
        this.activePlay = false;
        
        this.add.image(130, 300, 'background2').setOrigin(0);
    }
  }
  
  
  