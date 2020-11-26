import Bootloader from './bootloader.js'
import sceneA from './scene/sceneA.js'
const config = {
    width: 640,
    height: 400,
    parent:"container",
    type: Phaser.AUTO,
    physics:{
        default: 'arcade',
    },
    scene: [
        Bootloader,
        sceneA,
    ]
    
 }
 new Phaser.Game(config);