"use strict"
console.log("basicClasses");
class Vector2 {
	constructor (x,y) {
		this.x = x;
		this.y = y;
	}

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

	add (vector2) {
		this.x += vector2.x;
		this.y += vector2.y;
		return this;
	}

	subtract (vector2) {
		this.x -= vector2.x;
		this.y -= vector2.y;
		return this;
	}

	mult (vector2) {
		if (typeof(vector2) != "number"){
			this.x *= vector2.x;
			this.y *= vector2.y;
		}else {
			this.x *= vector2;
			this.y *= vector2;
		}
		return this;
	}

	reverse () {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	invert () {
		this.x = 1 / this.x;
		this.y = 1 / this.y;
		return this;
	}

	copyFrom (vector2) {
		this.x = vector2.x;
		this.y = vector2.y;
	}

	toString() {
		return `[x: ${x}, y: ${y}]`
	}
}

Vector2.elNum = 2;
Vector2.zero = function () {
	return new Vector2 (0,0);
}

Vector2.one = function () {
	return new Vector2 (1,1);
}


/*
class Rect {
	constructor (position, size) {
		this.position = position;
		this.size = size;
	}
}
*/
