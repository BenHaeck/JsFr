"use strict";

// fetches the canvus and extracts usful values {canvas width/height, canvas context}
// and stuffs them into the "gr" object
const gr = GameRenderer;
gr.setupRenderer("screen");

// imports the smile sprite from the html document
assets.smile = new Sprite("smile");

// turns off image smoothing
gr.ctx.imageSmoothingEnabled = false;

// Defines the size of the mouse curser
const mouseSize = new Vector2(16,16);

// Defines the level
const level = new GameWorld (60,
// Defines the start funtion
function (){

	// Defines the player Character
	this.player = new Player (new Vector2 (64,256));

	// Defines the key inputs
	keyinput = {
		KeyW: false,
		KeyS: false,
		KeyD: false,
		KeyA: false,
	}

	// Defines the wall
	this.wall = new Rect(new Vector2 (256,256), new Vector2 (64,64));

	// Defines the smily fases
	this.smilies = [
		new Smily(new Vector2(64,64), new Vector2(64,64), 0, 90),
		new Smily(new Vector2 (256, 64), new Vector2(64,64), 0, -45)
	];
},

// this is the update function, and gets called every frame
function (dt) {
	// updates the player and smilies
	this.player.update (this, null, dt);
	updateActors (this, this.smilies, dt);
},

// this is the draw function, and gets called every frame
function () {
	// fills the screen with black
	gr.setFillStyle('black');
	gr.fillScreen();

	// draws the player and smilies
	this.player.draw(gr.ctx);
	drawActors (this.smilies,gr.ctx);


	// this draws the wall
	gr.ctx.fillStyle = 'white';
	gr.drawRect(this.wall.pos, this.wall.size);

	// this draws the mouse curser
	if (mouseinput.click)
		gr.ctx.fillStyle = 'red'
	gr.drawRect(mouseinput.pos,mouseSize);
});

class Smily extends Actor {
	constructor (pos, size, rot, torqe) {
		super (pos);
		this.rect = new Rect (pos, size);
		//this.size = size;
		this.rot = rot;
		this.torqe = torqe;
	}

	onUpdate (container, group, dt) {
		this.rot += this.torqe * dt;
	}

	onDraw (ctx) {
		//console.log(`sprite: ${assets.smile}, pos: ${this.pos}, size: ${this.size}`)
		gr.drawSpriteRot (assets.smile, this.pos, this.rect.size, this.rot);
	}
}

class Player extends Actor {
	constructor (pos) {
		super (pos);
		this.rect = new Rect (pos,new Vector2 (32,32));
	}

	update (level, group, dt) {
		if (keyinput.KeyS) this.pos.y += Player.speed * dt;
		if (keyinput.KeyW) this.pos.y -= Player.speed * dt;
		this.rect.collide(level.wall,1);

		if (keyinput.KeyD) this.pos.x += Player.speed * dt;
		if (keyinput.KeyA) this.pos.x -= Player.speed * dt;
		//collide(this.pos,this.size,level.wall.pos,level.wall.size,0);

	}

	draw (ctx) {
		gr.drawSprite (assets.smile, this.pos, this.rect.size, ctx);
	}
}
Player.speed = 80;

level.start();
// starts the update loop
level.run();
