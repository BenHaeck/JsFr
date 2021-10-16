setupRenderer("screen");
assets.smile = new Sprite("smily");
console.log(assets.smile)

RenderVals.ctx.imageSmoothingEnabled = false;

const playerPos = [64, 64];
const playerSize = [64,64];
const playerSpeed = 80

keyinput.KeyW = false;
keyinput.KeyS = false;
keyinput.KeyD = false;
keyinput.KeyA = false;

const wall = {pos: [256,256], size: [64,64]};

function loop (dt) {
	RenderVals.ctx.fillStyle = 'black'
	fillScreen();


	if (keyinput.KeyS) playerPos[1] += playerSpeed * dt;
	if (keyinput.KeyW) playerPos[1] -= playerSpeed * dt;
	if (getCollision(playerPos,playerSize,wall.pos,wall.size))
		outOfCollider(playerPos,playerSize,wall.pos,wall.size,1);
	if (keyinput.KeyD) playerPos[0] += playerSpeed * dt;
	if (keyinput.KeyA) playerPos[0] -= playerSpeed * dt;
	if (getCollision(playerPos,playerSize,wall.pos,wall.size))
		outOfCollider(playerPos,playerSize,wall.pos,wall.size,0);

	drawSprite(assets.smile,playerPos[0],playerPos[1], playerSize[0], playerSize[1]);

	for (let i = 0; i < smilies.length; i++) {
		smilies[i].update(dt);
		smilies[i].draw();
	}

	RenderVals.ctx.fillStyle = 'white';

	drawRect(256, 256, 64, 64)

	if (mouseinput.click)
		RenderVals.ctx.fillStyle = 'red'
	drawRect(mouseinput.x,mouseinput.y,16,16);
}

class Smily {
	constructor (pos, size, rot, torqe) {
		this.pos = pos;
		this.size = size;
		this.rot = rot;
		this.torqe = torqe;
	}

	update (dt) {
		this.rot += this.torqe * dt;
	}

	draw () {
		drawSpriteRot (assets.smile, this.pos[0], this.pos[1], this.size[0], this.size[1], this.rot);
	}
}

const smilies = [new Smily([100,100], [64,64], 0, 90)];

startGameLoop (loop, 32);
