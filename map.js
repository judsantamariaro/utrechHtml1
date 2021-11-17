var game = new Phaser.Game(597, 798, Phaser.AUTO, 'mapa-phaser');// Creacion del Phaser.AUTO

var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
// Definicion de las variables usadas para botones, fondo y animaciones de las ventanas de texto como el tween.
var fondo;
var pu;
var cB;
var tween = null;

var juego={
	preload: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;// Adaptar las imagenes al cambio de pantalla
		
		game.load.spritesheet('B-ec', 'imagenes/B-ec1.png', 67.66666667, 30);
		game.load.spritesheet('B-bp', 'imagenes/B-bp.png', 67.66666667, 30);
		game.load.spritesheet('B-z', 'imagenes/B-z.png', 67.66666667, 30);
		game.load.spritesheet('B-n', 'imagenes/B-n.png', 67.66666667, 30);
		game.load.spritesheet('B-m', 'imagenes/B-m.png', 67.66666667, 30);
		game.load.spritesheet('B-t', 'imagenes/B-t.png', 67.66666667, 30);
		//Cargar las imagenes de los botones como sprites, para poder ver diferentes colores al momento de pasar el mouse y tambien cargar las imagenes del fondo y las imagenes que contiene el texto de cada lugar importante.

		
		game.load.image('cerrar','imagenes/cerrar.png');
		
		game.load.image('fondo','imagenes/map.png');
		
		game.load.image('i-ec','imagenes/I-ec.png');
		game.load.image('i-bp','imagenes/I-bp.png');
		game.load.image('i-z','imagenes/I-z.png');
		game.load.image('i-n','imagenes/I-n.png');
		game.load.image('i-m','imagenes/I-m.png');
		game.load.image('i-t','imagenes/I-t.png');
		
		
		
	},
	
	create: function (){
		fondo = game.add.tileSprite(0, 0, 591, 798, 'fondo');
		
		b1 = game.add.button(9, 430, 'B-ec', ec, this, 1, 0, 2);
		b2 = game.add.button(35, 278, 'B-bp', bp, this, 1, 0, 2);
		b3 = game.add.button(164, 193, 'B-z', z, this, 1, 0, 2);
		b4 = game.add.button(243, 110, 'B-n', n, this, 1, 0, 2);
		b5 = game.add.button(451, 452, 'B-m', m, this, 1, 0, 2);
		b6 = game.add.button(396, 664, 'B-t', t, this, 1, 0, 2);
		// Se define los botones con sus respetivos sprites y funciones como ec o bp.
	pu = game.add.tileSprite(0, 0, 295, 148, 'fondo');
	// El pu es la animacion para el popup de cada una de las ventanas de informacion y el cB para la accion del boton de cierre de cada una con el 'cerrar' que define arriba el boton pequeño en la esquina
	cB = game.make.tileSprite(0, 0, 30, 30, 'cerrar');
    cB.inputEnabled = true;
    cB.input.priorityID = 1;
    cB.input.useHandCursor = true;
    cB.events.onInputDown.add(cW, this);
	
	//Se pone en 0 para que no aparezca sin ser activado por las acciones de oW
	pu.scale.set(0);	
	}
}
function oW() {// Accion para el abrir la ventana de informacion
    if ((tween !== null && tween.isRunning) || pu.scale.x === 1)
    {
        return;
    }
    // La animacion para el abrir la ventana de informacion dado por el Phaser.Easing que lleva un Out y un In
    tween = game.add.tween(pu.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Quintic.Out, true);
	    pu.addChild(cB);
}
function cW() {
    if (tween && tween.isRunning || pu.scale.x === 0)	
    {
        return;
    }
    tween = game.add.tween(pu.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Quintic.In, true);
}
//La definicion de cada funcion para cada ventana de informacion ya que cargar con el pu.loadtexture una imagen diferente cada vez que es la ventana de informacion.
function  ec () {
	pu.loadTexture('i-ec');
    oW();
}
function  bp () {
	pu.loadTexture('i-bp');
    oW();
}
function  z () {
	pu.loadTexture('i-z');
    oW();
}
function  n () {
	pu.loadTexture('i-n');
    oW();
}
function  m () {
	pu.loadTexture('i-m');
    oW();
}
function  t () {
	pu.loadTexture('i-t');
    oW();
}
game.state.add('juego', juego);
game.state.start('juego');