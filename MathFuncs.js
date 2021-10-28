"use strict"
const MatF = {
	// (x:number) number
	// returns 1 if the value is positive, -1 if negative and zero 0 the inputs 0
	getDir (x) {
		if (x < 0) return -1;
		if (x > 0) return 1;
		return 0;
	},

	// (a: number, b: number, v: number) number
	// interpalates between value a and b using v
	lerp (a,b,v) {
		return (a * (1-v)) + (b * v);
	}
}
