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


export default new Phaser.Game(config)