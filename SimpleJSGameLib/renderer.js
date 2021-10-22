'use strict';
const RenderVals = {
	setFillStyle (style) {
		this.ctx.fillStyle = style;
	}
};

// (canvasID: string) bool
// sets up the renderer and places important values into the renderVals object
function setupRenderer (canvasID) {
	const tcv = document.getElementById(canvasID);
	if (tcv == null) {
		console.log(`could not find element with id:${canvusID}`)
		return false;
	}
	RenderVals.canvas = tcv;
	RenderVals.ctx = RenderVals.canvas.getContext('2d');
	RenderVals.screenSize = new Vector2 (RenderVals.canvas.width, RenderVals.canvas.height);
	RenderVals.zeroZero = new Vector2 (0,0);
	console.log(`found: \"${canvasID}\"`);
	return true;
}

// (pos: Vector2, size: Vector2 ?ctx: canvasCtx)
// draws a rectange onto the screenSize
function drawRect (pos,size,ctx = null) {
	if (ctx == null)
		ctx = RenderVals.ctx;
	ctx.fillRect(pos.x - (size.x * 0.5), pos.y - (size.y * 0.5), size.x, size.y);
}

// (?ctx: canvasCtx)
function fillScreen (ctx = null) {
	if (ctx == null)
		ctx = RenderVals.ctx;
	ctx.fillRect (0,0,RenderVals.screenSize.x,RenderVals.screenSize.y);
}

//(sprite,pos,size,?ctx: canvasCtx)
function drawSprite (sprite,pos,size,ctx = null) {
	if (ctx == null)
		ctx = RenderVals.ctx;
	let multx = 1;
	if (size.x < -1) multx = -1;

	let multy = 1;
	if (size.y < -1) multy = -1;

	ctx.scale (multx, multy);
	try {
		ctx.drawImage(sprite.image, sprite.sx, sprite.sy, sprite.swidth, sprite.sheight,
		multx * (pos.x - (size.x*0.5)), multy * (pos.y - (size.y * 0.5)), size.x * multx, size.y * multy);
	} catch (e) {
		console.log(e + `\nrenderContext: ${ctx}, sprite: ${sprite}\nremember to make sure the you pass in the sprite and not the image`);

	}
	ctx.scale (multx, multy);
}

// (sprite: sprite, pos: Vector2, size: Vector2, rot: number, ?ctx: canvasCtx)
// draws a sprite that can rotate
function drawSpriteRot (sprite, pos, size, rot, ctx = null) {
	if (ctx == null)
		ctx = RenderVals.ctx;
	ctx.save();
	ctx.translate(pos.x, pos.y);
	ctx.rotate(-rot * (Math.PI / 180));
	drawSprite(sprite, Vector2.zeroVal, size,ctx);
	ctx.restore();
}


class Sprite {
	// (image: img, sx: number, sy: number, swidth: number, sheight: number)
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
