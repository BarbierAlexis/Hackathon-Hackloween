const config = {
	width: 500,
	height: 300,
	type: Phaser.AUTO,
	physics: {
		default : 'arcade',
		arcade : {
			gravity: {
				y: 0,
			}
		}
	},
	scene: {
		preload: preload,
		create: create,
		update, update
	}
}

let game = new Phaser.Game(config)
let perso
let cursors
let hero

function preload (){
	this.load.image('perso', './images/perso.jpeg')
	this.load.image('hero', './images/perso1.png')

}

function create(){
	perso = this.physics.add.image(250,150, 'perso').setScale(0.2)
	perso.body.collideWorldBounds = true;

	cursors = this.input.keyboard.createCursorKeys()

	//hero = this.physics.add.image(400,150, 'hero').setScale(0.8)
	//hero.body.collideWorldBounds = true;


	let group = this.physics.add.group({ key: 'hero', frameQuantity: 10 });
	let rect = new Phaser.Geom.Rectangle(0, 0, 500, 300);
	Phaser.Actions.RandomRectangle(group.getChildren(), rect);

	//this.physics.add.collider(perso,hero)  ==> Creer une collision

	this.physics.add.overlap(perso, hero, kill, null, this);
	this.physics.add.overlap(perso, group, kill, null, this);

}

function update(){
	
	//hero.setVelocity(0)
   

	perso.setVelocity(0)

	if (cursors.up.isDown){
		perso.setVelocity(0, -300)
	}

	if (cursors.right.isDown){
		perso.setVelocity(300, 0)
	}

	if (cursors.left.isDown){
		perso.setVelocity(-300, 0)
	}

	if (cursors.down.isDown){
		perso.setVelocity(0, 300)
	}

}

function kill (perso, group)
{
	group.disableBody(true, true);
}