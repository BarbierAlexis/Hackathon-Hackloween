let gameScene = new GameScene();
let loadScene = new LoadScene();
let endScene = new EndScene();

const config = {
	width: 1000,
	height: 1000,
	type: Phaser.AUTO,
	physics: {
		default : 'arcade',
		arcade : {
			gravity: {
				y: 0,
			}
		}
	},
	scene: [
		loadScene,
		gameScene,
		endScene,
	]
}
function fetchApi() {
	axios.get(`https://hackathon-wild-hackoween.herokuapp.com/movies/`)
	.then((response) =>{
		console.log(`Le titre du film est : ${response.data.movies[16].title} !!!!! Vous voyez nous avons utilisé votre API!! :)`)
		  })
	}
  fetchApi();


let game = new Phaser.Game(config)
