import BattleScene from '/scenes/battleScene.js'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
    pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [BattleScene]
}


var game = new Phaser.Game(config)

// load scenes
game.scene.add('BattleScene', BattleScene);

// start title
game.scene.start('BattleScene');