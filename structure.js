"use strict";

// Members include (loopRate: number, start:function, update:function, draw:function)
class GameWorld {
	// constructor (target)
	constructor (start, update, draw) {
		this.start = start;
		this.update = update;
		this.draw = draw;
	}

	loop (timestamp) {
		let dt;
		if (timestamp == null || this.oldTimeStamp == null)
			dt = 0;
		else
			dt = timestamp-this.oldTimeStamp;
		this.oldTimeStamp = timestamp;
		if (this.update != null){this.update(dt/1000)}
		if (this.draw != null){this.draw()}

		window.requestAnimationFrame((timestamp)=>this.loop(timestamp));
	}

	run () {
		this.loop()
	}

}

class Actor {
	constructor (pos) {
		this.pos = pos;
	}

	update (level, group, dt) {
		if (this.onUpdate != null)
			this.onUpdate(level, group, dt);
	}

	draw (ctx) {
		if (this.onDraw != null)
			this.onDraw (ctx);
	}
}

function updateActors (level,group,dt) {
	if (group == null) return;
	for (let i = group.length - 1; i >= 0; i--) {
		group[i].update(level,group,dt);
	}
}

function drawActors (group,ctx) {
	if (group == null) return
	for (let i = group.length - 1; i >= 0; i--) {
		group[i].draw(group,ctx);
	}
}
