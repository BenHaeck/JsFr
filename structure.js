"use strict";

// Members include (loopRate: number, start:function, update:function, draw:function)
class GameWorld {
	// constructor (target)
	constructor (targetLoopRate, start, update, draw) {
		this.loopRate = targetLoopRate;
		this.start = start;
		this.update = update;
		this.draw = draw;
	}

	loop () {
		//if (gw == null)
		const gw = this;
		if (gw.update != null)
		gw.update(1/gw.loopRate);
		if (gw.draw != null)
		gw.draw ();
		//console.log(this)
	}
	run () {
		setTimeout (()=>this.run(), 1000/this.loopRate,this);
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
