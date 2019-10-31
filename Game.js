let scene = new Phaser.Scene("game");

let monster
let cursors
let hero
let score = 0;
let scoreText

class GameScene extends Phaser.Scene {
	constructor(){
		super({
			key: 'gameScene',
			active: false
		}
		)

	}


	preload () {
		this.cameras.main.fadeIn(800)
		this.load.image('monster', './images/monster.png')
		this.load.image('hero', './images/perso1.png')
		this.load.image('hero2', './images/perso5.png')
		this.load.image('hero3', './images/perso6.png')
		this.load.image('hero4', './images/perso4.png')
		this.load.image('noel', './images/pere-noel.png')
		this.load.image('background', './images/background.jpg')

		this.load.audio('music', './audio/musique_de_fond1.mp3');
		this.load.audio('cris', './audio/cris.mp3');
	}

	create(){

		let soundSample = this.sound.add('music');
		soundSample.play();
		
		this.add.image(0, 0, 'background').setOrigin(0);

		monster = this.physics.add.image(0,750, 'monster').setScale(0.5)
		monster.body.collideWorldBounds = true;

		cursors = this.input.keyboard.createCursorKeys()

		//hero = this.physics.add.image(400,150, 'hero').setScale(0.8)
		//hero.body.collideWorldBounds = true;


		let group = this.physics.add.group({ key: 'hero', frameQuantity: 3 });
		let rect = new Phaser.Geom.Rectangle(0, 0, 950, 950);
		Phaser.Actions.RandomRectangle(group.getChildren(), rect);
		this.physics.add.overlap(monster, group, this.kill, null, this);

		let group2 = this.physics.add.group({ key: 'hero2', frameQuantity: 3 });
		let rect2 = new Phaser.Geom.Rectangle(0, 0, 950, 950);
		Phaser.Actions.RandomRectangle(group2.getChildren(), rect);
		this.physics.add.overlap(monster, group2, this.kill, null, this);

		let group3 = this.physics.add.group({ key: 'hero3', frameQuantity: 3 });
		let rect3 = new Phaser.Geom.Rectangle(0, 0, 950, 950);
		Phaser.Actions.RandomRectangle(group3.getChildren(), rect);
		this.physics.add.overlap(monster, group3, this.kill, null, this);

		let group4 = this.physics.add.group({ key: 'hero4', frameQuantity: 3 });
		let rect4 = new Phaser.Geom.Rectangle(0, 0, 950, 950);
		Phaser.Actions.RandomRectangle(group4.getChildren(), rect);
		this.physics.add.overlap(monster, group4, this.kill, null, this);

		let group5 = this.physics.add.group({ key: 'noel', frameQuantity: 1 });
		let rect5 = new Phaser.Geom.Rectangle(0, 0, 950, 950);
		Phaser.Actions.RandomRectangle(group5.getChildren(), rect);
		this.physics.add.overlap(monster, group5, this.kill, null, this);


		//this.physics.add.collider(monster,hero)  ==> Creer une collision

		this.physics.add.overlap(monster, hero, this.kill, null, this);
		

		// The Score

		scoreText = this.add.text(50, 50, 'score: 0').setScale(2.5);
		
	}

	update(){
		
		//hero.setVelocity(0)
	

		monster.setVelocity(0)

		if (cursors.up.isDown){
			monster.setVelocity(0, -400)
		}

		if (cursors.right.isDown){
			monster.setVelocity(400, 0)
		}

		if (cursors.left.isDown){
			monster.setVelocity(-400, 0)
		}

		if (cursors.down.isDown){
			monster.setVelocity(0, 400)
		}

	}


	kill (monster, group)
	{
		group.disableBody(true, true);
		let soundSample = this.sound.add('cris');
		soundSample.play();
		//Add and update the score
		score += 1;
		scoreText.setText('Score: ' + score);
		if(score=== 13){
			this.cameras.main.fadeIn(700)
			game.scene.start('EndScene')
			game.scene.switch('EndScene')
		}
		
	}

}
