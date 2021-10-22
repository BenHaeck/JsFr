"use strict";

// fetches the canvus and extracts usful values {canvas width/height, canvas context}
// and stuffs them into the "RenderVals" object
setupRenderer("screen");

// imports the smile sprite from the html document
assets.smile = new Sprite("smile");

// turns off image smoothing
RenderVals.ctx.imageSmoothingEnabled = false;

// Defines the size of the mouse curser
const mouseSize = new Vector2(16,16);

// Defines the level
const level = new GameWorld (60,
// Defines the start funtion
function (){

	// Defines the player Character
	this.player = new Player (new Vector2 (64,256));

	// Defines the key inputs
	keyinput.KeyW = false;
	keyinput.KeyS = false;
	keyinput.KeyD = false;
	keyinput.KeyA = false;

	// Defines the wall
	this.wall = {pos: new Vector2 (256,256), size: new Vector2 (64,64)};

	// Defines the smily fases
	this.smilies = [
		new Smily(new Vector2(64,64), new Vector2(64,64), 0, 90),
		new Smily(new Vector2 (256, 64), new Vector2(64,64), 0, -45)
	];
},

function (dt) {
	// updates the player and smilies
	this.player.update (this, null, dt);
	updateActors (this, this.smilies, dt);
},

// this is the update function, and gets called every frame
function () {
	// fills the screen with black
	RenderVals.ctx.fillStyle = 'black'
	fillScreen();

	// draws the player and smilies
	this.player.draw(RenderVals.ctx);
	drawActors (this.smilies,RenderVals.ctx);


	// this draws the wall
	RenderVals.ctx.fillStyle = 'white';
	drawRect(this.wall.pos, this.wall.size);

	// this draws the mouse curser
	if (mouseinput.click)
		RenderVals.ctx.fillStyle = 'red'
	drawRect(mouseinput.pos,mouseSize);
});

class Smily extends Actor {
	constructor (pos, size, rot, torqe) {
		super (pos);
		this.size = size;
		this.rot = rot;
		this.torqe = torqe;
	}

	onUpdate (container, group, dt) {
		this.rot += this.torqe * dt;
	}

	onDraw (ctx) {
		//console.log(`sprite: ${assets.smile}, pos: ${this.pos}, size: ${this.size}`)
		drawSpriteRot (assets.smile, this.pos, this.size, this.rot);
	}
}

class Player extends Actor {
	constructor (pos) {
		super (pos);
		this.size = new Vector2 (32,32);
	}

	update (level, group, dt) {
		if (keyinput.KeyS) this.pos.y += Player.speed * dt;
		if (keyinput.KeyW) this.pos.y -= Player.speed * dt;
		collide(this.pos,this.size,level.wall.pos,level.wall.size,1);

		if (keyinput.KeyD) this.pos.x += Player.speed * dt;
		if (keyinput.KeyA) this.pos.x -= Player.speed * dt;
		collide(this.pos,this.size,level.wall.pos,level.wall.size,0);
	}

	draw (ctx) {
		drawSprite (assets.smile, this.pos, this.size, ctx);
	}
}
Player.speed = 80;

level.start();
// starts the update loop
level.run();
