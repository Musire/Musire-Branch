class BattleScene extends Phaser.Scene {

    constructor() {
        super({key:'BattleScene'});
    }

    preload() {
        this.load.image('blankScene', 'assets/sprites/blankScene.png');
    }

    create() {
            var bg = this.add.sprite(0,0,'blankScene');
            bg.setOrigin(0,0);

            var text = this.add.text(100,100, 'Welcome to my game!');
    }

}

export default BattleScene;