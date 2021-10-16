
function getCollision (pos1, size1, pos2, size2) {
	let res = true;
	for (let i = 0; i <= 1; i++) {
		const overlap = ((size1[i] + size2[i]) * 0.5) - Math.abs(pos1[i] - pos2[i]);

		if (overlap <= 0) res = false;
	}
	return res;
}

function outOfCollider (pos1, size1, pos2, size2, axis) {

	let dist = pos2[axis] - pos1[axis];
	let dir =0;
	if (dist > 1)
		dir = 1;
	else
		dir = -1;

	const combSize = (size1[axis] + size2[axis]) * 0.5;
	pos1[axis] = pos2[axis] - (combSize * dir);
}
