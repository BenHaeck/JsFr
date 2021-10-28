"use strict";

// (pos1: Vector2, size1: Vector2, pos2: Vector2, size2: Vector2, axis: number) bool
// returns whether or not the 2 objects collided
// if axis is not null this will move object 1 out of object 2
// axis refers to the axis it should move the object allong
// 0 = x, 1 = y
function collide (pos1, size1, pos2, size2, axis) {
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

/*function getCollision () {
	for (let i = 0; i <= 1; i++) {
		const overlap = ((Math.abs(size1.get(i)) + Math.abs(size2.get(i))) * 0.5)-
		Math.abs(pos1.get(i) - pos2.get(i));

		if (overlap <= 0) return false;
	}
	return true;
}
*/
