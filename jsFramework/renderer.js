'use strict';
let canvas;
let ctx;
let screenWidth;
let screenHeight;

function setupRenderer (canvasID) {
	const tcv = document.getElementById(canvasID);
	if (tcv == null) {return false;}
	canvas = tcv;
	ctx = canvas.getContext('2d');
	screenWidth = canvas.width;
	screenHeight = canvas.height;
	return true;
}

function drawRect (x,y,width,height, ctx) {
	ctx.fillRect(x - (width * 0.5), y - (height * 0.5), width, height);
}

function fillScreen () {
	ctx.fillRect (0,0,screenWidth, screenHeight);
}

function drawSprite (sprite,x,y,width,height, ctx) {
	let multx = 1;
	if (width < -1) multx = -1;

	let multy = 1;
	if (height < -1) multy = -1;

	ctx.scale (multx, multy);
	ctx.drawImage(sprite.image, sprite.sx, sprite.sy, sprite.swidth, sprite.sheight,
	multx * (x - (width*0.5)), multy * (y - (height * 0.5)), width * multx, height * multy);
	ctx.scale (multx, multy);
}

function drawSpriteRot (sprite, x, y, width, height, rot, ctx) {

	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(-rot * (Math.PI / 180));
	drawSprite(sprite, 0, 0, width, height, ctx);
	ctx.restore();
}


class Sprite {
	constructor (image, sx, sy, swidth, sheight) {
		this.image = image;
		this.sx = sx;
		if (sx == null) this.sx = 0;
		this.sy = sy;
		if (sy == null) this.sy = 0;
		this.swidth = swidth;
		if (swidth == null) this.swidth = image.naturalWidth;
		this.sheight = sheight;
		if (sheight == null) this.sheight = image.naturalHeight;
	}
}

const assets = {};
