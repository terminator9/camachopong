class Bootloader extends Phaser.Scene {
    constructor(){
        super({key: "Bootloader"});
    }
    preload(){
        this.load.on("complete", () => {
            this.scene.start("sceneA");
        });
        this.load.image("pasto", "assets/thepastov3.png");
        this.load.image("ball","assets/camacho_c.png");
        this.load.image("izquierda","assets/left_pallete.png");
        this.load.image("derecha","assets/right_pallete.png");
        this.load.image("separador","assets/separator.png");
       
    }
    //create(){
        
    //}
}
export default Bootloader;