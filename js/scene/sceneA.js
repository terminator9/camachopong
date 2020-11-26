import Palas from '../objects/palas.js';
class sceneA extends Phaser.Scene {
    constructor(){
        super({key: "sceneA"})
    }
    preload(){
        console.log("la sceneA se ha cargado");
    }
    create(){
        this.add.image(325,180,"pasto");
        let center_height =this.sys.game.config.height/2;
        let center_width =this.sys.game.config.width/2;
        this.add.image(center_width,center_height, "separador");
        //estas es la paleta de la izquierda
        //this.izquierda = this.add.image(30,this.sys.game.config.height/2,"izquierda");
        this.izquierda= new Palas(this,30, center_height,"izquierda");
        //esta es ka paleta de la derecha
        //this.derecha = this.add.image(this.sys.game.config.width-30,this.sys.game.config.height/2, "derecha");
        this.derecha= new Palas(this,this.sys.game.config.width-30,this.sys.game.config.height/2,"derecha")
        //fisicas
        this.physics.world.setBoundsCollision(false,false,true,true);
        this.ball = this.physics.add.image(center_width,center_height,"ball");

        this.ball.setVelocityX(-180);
        this.ball.setCollideWorldBounds(true);
        this.ball.setScale(0.15)
        this.ball.setBounce(1.2);
        this.physics.add.collider(this.ball, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.chocaPala, null, this);
        //controls
        this.cursor=this.input.keyboard.createCursorKeys();


        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
    }
    update(){
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width){
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
            
            this.ball.setVelocity(180);
            //this.ball.setVelocity(Phaser.Math.Between(180));
        }
        //control
        if(this.cursor.down.isDown) {
            this.derecha.body.setVelocityY(300);
        }else if(this.cursor.up.isDown) {
            this.derecha.body.setVelocityY(-300);
        }else{
            this.derecha.body.setVelocityY(0);
        }
        if(this.cursor_S.isDown) {
            this.izquierda.body.setVelocityY(300);
        }else if(this.cursor_W.isDown) {
            this.izquierda.body.setVelocityY(-300);
        }else{
            this.izquierda.body.setVelocityY(0);
        }

        
    }
    chocaPala(){
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}
export default sceneA;