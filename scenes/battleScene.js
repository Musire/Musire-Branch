class BattleScene extends Phaser.Scene {

    constructor() {
        super({key:'BattleScene'});
    }

    preload() {
        this.load.image('blankScene', 'assets/sprites/blankScene.png');
        this.load.image('opponent', 'assets/sprites/blue.png');
        this.load.image('player', 'assets/sprites/red2.png');

    }

    create() {
            // create the canvas of the scene
            this.blankScene = this.add.sprite(400, 400,'blankScene');
            this.opponent = this.add.sprite(350, 360, 'opponent')
            this.player = this.add.sprite(445, 395, 'player')
            this.banner = this.add.text(300,100, 'Welcome to my game!');    
            
            this.tweens.add({
                targets: this.opponent,
                duration: 1000,
                x: 450,
                repeat: 0,
            })
            
            this.tweens.add({
                targets: this.player,
                duration: 1000,
                x: 355,
                repeat: 0,
            })
    }

}

export default BattleScene;