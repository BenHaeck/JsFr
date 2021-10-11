'use strict';
console.log(setupRenderer("screen"));
ctx.imageSmoothingEnabled = false;
assets.smile = new Sprite (document.getElementById("smily"));
//ctx.style = 'black';
let crot = 0;
const playerPos = [100,200];
const playerSpeed = 100;

keyinput.KeyW = false;
keyinput.KeyS = false;
keyinput.KeyA = false;
keyinput.KeyD = false;


startGameLoop((dt)=>{draw(dt);},60);


function draw(dt) {
	ctx.fillStyle = 'black';
	fillScreen();

	ctx.fillStyle = 'white';
	drawRect(90,300,128,128,ctx);
	drawSprite (assets.smile, 250, 100, 64, 64, ctx);

	drawSprite (assets.smile, 250, 200, 64, -64, ctx);

	if (keyinput.KeyS) playerPos[1] += playerSpeed * dt;
	if (keyinput.KeyW) playerPos[1] -= playerSpeed * dt;
	if (keyinput.KeyD) playerPos[0] += playerSpeed * dt;
	if (keyinput.KeyA) playerPos[0] -= playerSpeed * dt;
	drawSprite (assets.smile, playerPos[0],playerPos[1], 64, 64, ctx);

	crot += 90*dt;
	crot %= 360;
	drawSpriteRot (assets.smile, 100, 140, 64, 64, crot, ctx)
}
