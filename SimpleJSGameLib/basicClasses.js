"use strict"
//console.log("basicClasses");
class Vector2 {
	// Takes (x: number, y: number)
	constructor (x,y) {
		this.x = x;
		this.y = y;
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
		if (typeof(vector2) != "number"){
			this.x *= val.x;
			this.y *= val.y;
		}else {
			this.x *= val;
			this.y *= val;
		}
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

Vector2.elNum = 2;
Vector2.zero = function () {
	return new Vector2 (0,0);
}

Vector2.one = function () {
	return new Vector2 (1,1);
}

Vector2.zeroVal = new Vector2 (0,0);


// currently unused
class Rect {
	// takes in (position: Vector2, size: Vector2)
	constructor (position, size) {
		this.position = position;
		this.size = size;
	}
}
