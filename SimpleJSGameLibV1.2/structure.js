/*class Level {
	constructor (groupNames) {
		this.groups = [];
		for (let i = 0; i < groupNames.length; i++) {
			const group = new ActorGroup ();
			this[groupNames[i]] = group;
			this.groups[i] = group;
		}
	}

	update (dt) {
		for (let i = 0; i < this.groups.length; i++) {
			const cgroup = this.groups[i];
			cgroup.update();
		}
	}

	draw (ctx) {
		for (let i; i< this.groups.length; i++) {
			this.groups[i].draw(ctx);
		}
	}
}*/

class ActorGroup {
	constructor (actors) {
		if (actors == null) actors = [];
		this.actors = actors;
	}


	update (level, dt) {
		for (let i = this.actors.length; i >= 0; i--){
			this.actors.update(level, group, dt);
		}
	}

	addActor (actor) {
		this.actors.push(actor);
	}

	removeActor (i){
		if (i >= 0 && i < this.actors.length)
			this.actors.splice(i,1);
	}

	draw (ctx) {
		for (let i = 0; i < this.actors.length; i++) {
			actors.draw(ctx);
		}
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
