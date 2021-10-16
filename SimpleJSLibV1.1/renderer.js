'use strict';
const RenderVals = {};


function setupRenderer (canvasID) {
	const tcv = document.getElementById(canvasID);
	if (tcv == null) {
		console.log(`could not find element with id:${canvusID}`)
		return false;
	}
	RenderVals.canvas = tcv;
	RenderVals.ctx = RenderVals.canvas.getContext('2d');
	RenderVals.screenWidth = RenderVals.canvas.width;
	RenderVals.screenHeight = RenderVals.canvas.height;
	console.log(`found: \"${canvasID}\"`);
	return true;
}

function drawRect (x,y,width,height) {
	const ctx = RenderVals.ctx;
	ctx.fillRect(x - (width * 0.5), y - (height * 0.5), width, height);
}

function fillScreen (ctx = null) {
	if (ctx == null) ctx = RenderVals.ctx;
	ctx.fillRect (0,0,RenderVals.screenWidth, RenderVals.screenHeight);
}

function drawSprite (sprite,x,y,width,height,ctx = null) {
	if (ctx == null) ctx = RenderVals.ctx;
	let multx = 1;
	if (width < -1) multx = -1;

	let multy = 1;
	if (height < -1) multy = -1;

	ctx.scale (multx, multy);
	try {
		ctx.drawImage(sprite.image, sprite.sx, sprite.sy, sprite.swidth, sprite.sheight,
		multx * (x - (width*0.5)), multy * (y - (height * 0.5)), width * multx, height * multy);
	} catch (e) {
		console.log(e + `renderContext: ${ctx}, sprite${sprite}\nremember to make sure the you pass in the sprite and not the image`);

	}
	ctx.scale (multx, multy);
}

function drawSpriteRot (sprite, x, y, width, height, rot, ctx = null) {
	if (ctx == null) ctx = RenderVals.ctx;
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(-rot * (Math.PI / 180));
	drawSprite(sprite, 0, 0, width, height,ctx);
	ctx.restore();
}


class Sprite {
	constructor (image, sx, sy, swidth, sheight) {
		if (typeof(image) == "string")
			image = document.getElementById(image);
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
