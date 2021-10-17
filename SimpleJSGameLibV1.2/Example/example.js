setupRenderer("screen");
assets.smile = new Sprite("smily");
console.log(assets.smile)

RenderVals.ctx.imageSmoothingEnabled = false;

const playerPos = new Vector2(64, 256);
const playerSize = new Vector2(32,-32);
const playerSpeed = 80

keyinput.KeyW = false;
keyinput.KeyS = false;
keyinput.KeyD = false;
keyinput.KeyA = false;

const wall = {pos: new Vector2 (256,256), size: new Vector2 (64,64)};

function loop (dt) {
	RenderVals.ctx.fillStyle = 'black'
	fillScreen();


	if (keyinput.KeyS) playerPos.y += playerSpeed * dt;
	if (keyinput.KeyW) playerPos.y -= playerSpeed * dt;
	if (getCollision(playerPos,playerSize,wall.pos,wall.size))
		outOfCollider(playerPos,playerSize,wall.pos,wall.size,1);
	if (keyinput.KeyD) playerPos.x += playerSpeed * dt;
	if (keyinput.KeyA) playerPos.x -= playerSpeed * dt;
	if (getCollision(playerPos,playerSize,wall.pos,wall.size))
		outOfCollider(playerPos,playerSize,wall.pos,wall.size,0);

	drawSprite(assets.smile,playerPos.x,playerPos.y, playerSize.x, playerSize.y);

	for (let i = 0; i < smilies.length; i++) {
		smilies[i].update(null,smilies,dt);
		smilies[i].draw(null);
	}

	RenderVals.ctx.fillStyle = 'white';

	drawRect(256, 256, 64, 64)

	if (mouseinput.click)
		RenderVals.ctx.fillStyle = 'red'
	drawRect(mouseinput.x,mouseinput.y,16,16);
}

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
		drawSpriteRot (assets.smile, this.pos.x, this.pos.y, this.size.x, this.size.y, this.rot);
	}
}

const smilies = [new Smily(new Vector2(64,64), new Vector2(64,64), 0, 90)];

startGameLoop (loop, 62);
