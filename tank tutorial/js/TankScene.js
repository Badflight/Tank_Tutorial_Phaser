class TankScene extends Phaser.Scene {
    /** @type {Phaser.Tilemaps.Tilemap} */
    map
    /** @type {Phaser.Tilemaps.TilemapLayer} */
    destructLayer
    /** @type {PlayerTank} */
    player
    /** @type {Phaser.Physics.Arcade.Group} */
    bullets

    /**@type {Phaser.GameObjects.Group} */
    explosions
    preload() {
        this.load.image('bullet', 'assets/tanks/bullet.png')
        this.load.atlas('tank','assets/tanks/tanks.png','assets/tanks/tanks.json')
        

    }
    create() {

    }
    update(time, delta) {
        
    }
   
    createPlayer(dataObject){

    }
    tryShoot(pointer){

    }
    fireBullet(bullet, rotation, target){

    }

   

    
    
    
}