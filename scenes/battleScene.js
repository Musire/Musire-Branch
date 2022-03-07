class BattleScene extends Phaser.Scene {

    constructor() {
        super({key:'BattleScene'});
    }

    preload() {

        //preload blankscene, opponent, player, and song
        this.load.image('blankScene', 'assets/sprites/blankScene.png');
        this.load.image('opponent', 'assets/sprites/blue.png');
        this.load.image('player', 'assets/sprites/red2.png');
        this.load.audio('song', 'assets/audio/pokemonBattle.mp3' )

    }

    create() {
            // create the canvas of the scene
            this.blankScene = this.add.sprite(400, 400,'blankScene');
            // create the opponent sprite
            this.opponent = this.add.sprite(350, 360, 'opponent')
            // create the player sprite
            this.player = this.add.sprite(445, 395, 'player')
            // test text for the game
            this.banner = this.add.text(300,100, 'Welcome to my game!');    
            
            // tween effect to slide opponent sprite from left to right
            this.tweens.add({
                targets: this.opponent,
                duration: 1000,
                x: 450,
                repeat: 0,
            })
            
            // tween effect to slide player sprite from right to left
            this.tweens.add({
                targets: this.player,
                duration: 1000,
                x: 355,
                repeat: 0,
            })

            // configuration for the audio file for music
            let musicConfig = {
                mute: false,
                volume: 1,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: false,
                delay: 0
            }

            // instantiate the sound component from the preloaded 'song'
            this.music = this.sound.add('song');
            this.music.play(musicConfig);
    }

}

export default BattleScene;