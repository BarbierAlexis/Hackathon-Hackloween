class LoadScene extends Phaser.Scene {
  constructor(){
    super({
      key: 'LoadScene',
    });
  }

  preload(){
    this.cameras.main.fadeIn(1000)
    this.load.image('background1', './images/background1.png')
  }

  create(){
      this.activeGame = false;
      this.add.image(0, 0, 'background1').setOrigin(0);
      this.input.on('pointerdown', () => {
        if(!this.activeGame) {
          this.activeGame = true 
          this.cameras.main.fadeOut(200)
          game.scene.start('gameScene')
          game.scene.switch('gameScene')
        }
      } ) 
  }
}


