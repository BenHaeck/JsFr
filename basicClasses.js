"use strict"
//console.log("basicClasses");

class Vector2 {
	// Takes (x: number, y: number)
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}

	static elmNum = 2;

	static zero () {
		return new Vector2 (0,0);
	};

	static one () {
		return new Vector2 (1,1);
	}

	//Takes (i:number) number
	get (i) {
		switch (i) {
			case 0:
			return this.x;

			case 1:
			return this.y;

			default:
			console.log (`Num ${i} is out of bounds for Vector2 with ${this.toString()}\nreturning 0 as a fail safe`);
			return 0;
		}
	}

	// Takes (val:number, i:number)
	set (val,i) {
		switch (i) {
			case 0:
			this.x = val;
			break;

			case 1:
			this.y = val;
			break;

			default:
			console.log(`Num ${i} is out of bounds for Vector2 with ${this.toString()}, with input val ${val}`);
		}
	}

	// add, subtract, mult, revers and invert all return the Vector2 you call them on for chaining purposes
	// takes (vector2:Vector2) Vector2
	//adds the value you pass in to the vector
	add (vector2) {
		this.x += vector2.x;
		this.y += vector2.y;
		return this;
	}

	// takes (vector2:Vector2) Vector2
	// subtracts the value you pass in from the vector
	subtract (vector2) {
		this.x -= vector2.x;
		this.y -= vector2.y;
		return this;
	}

	// takes (vector2:Vector2) Vector2
	// multiplies the vector by what you pass in
	mult (val) {
		this.x *= val.x;
		this.y *= val.y;
		return this;
	}

	// takes (vector2:number) Vector2
	// same as mult but it takes in a number, not a vector2
	// multiplies the vector by what you pass in
	scale (val) {
		this.x *= val;
		this.y *= val;
		return this;
	}

	// takes () Vector2
	// same as multiplying it by a negetive number
	reverse () {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	// takes () Vector2
	// sets the vector to 1/self
	invert () {
		this.x = 1 / this.x;
		this.y = 1 / this.y;
		return this;
	}

	swap () {
		const y = this.y;
		this.y = this.x;
		this.x = y;
		return this;
	}

	// takes (vector2: Vector2)
	// sets the value of the Vector you call it on to match what you pass in
	copyFrom (vector2) {
		this.x = vector2.x;
		this.y = vector2.y;
	}

	toString() {
		return `[x: ${this.x}, y: ${this.y}]`
	}
}

Vector2.zeroVal = Vector2.zero();


// currently unused
class Rect {
	// takes in (position: Vector2, size: Vector2)
	constructor (pos, size) {
		this.pos = pos;
		this.size = size;
	}


	collide (rect2, axis) {
		const pos1 = this.pos;
		const size1 = this.size;
		const pos2 = rect2.pos;
		const size2 = rect2.size;
		for (let i = 0; i <= 1; i++) {
			const overlap = ((Math.abs(size1.get(i)) + Math.abs(size2.get(i))) * 0.5)-
			Math.abs(pos1.get(i) - pos2.get(i));

			if (overlap <= 0) return false;
		}

		if (axis == null) return true;
		let dist = pos2.get(axis) - pos1.get(axis);
		let dir =0;
		if (dist > 1)
			dir = 1;
		else
			dir = -1;

		const combSize = (Math.abs(size1.get(axis)) + Math.abs(size2.get(axis))) * 0.5;
		pos1.set(pos2.get(axis) - (combSize * dir),axis);

		return true;
	}

}
